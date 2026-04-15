from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
import json
import google.generativeai as genai
from google.oauth2.service_account import Credentials
from googleapiclient.discovery import build
from datetime import datetime

app = FastAPI(title="NextEPiC Ventures API", version="1.0.0")

# Get additional allowed origins from environment variable
additional_origins = os.getenv("ADDITIONAL_CORS_ORIGINS", "").split(",")
additional_origins = [origin.strip() for origin in additional_origins if origin.strip()]

# CORS middleware to allow frontend calls from multiple sources
allowed_origins = [
    # Development - Localhost
    "http://localhost:3000",           # React dev server
    "http://localhost:5173",           # Vite dev server
    "http://localhost:4173",           # Vite preview
    "http://localhost:8080",           # Vite dev server (alternative port)
    "http://localhost:8081",           # Current dev server
    "http://127.0.0.1:3000",          # Local IP variants
    "http://127.0.0.1:5173",
    "http://127.0.0.1:4173",
    "http://127.0.0.1:8080",
    "http://127.0.0.1:8081",
    "https://localhost:3000",          # HTTPS localhost
    "https://localhost:5173",
    "https://localhost:4173",
    "https://localhost:8080",
    "https://localhost:8081",
    "https://127.0.0.1:3000",
    "https://127.0.0.1:5173",
    "https://127.0.0.1:4173",
    "https://127.0.0.1:8080",
    "https://127.0.0.1:8081",
    
    # Production - Your GoDaddy Domain
    "https://nextepic.in",             # Your domain HTTPS
    "http://nextepic.in",              # Your domain HTTP
    "https://www.nextepic.in",         # WWW variant HTTPS
    "http://www.nextepic.in",          # WWW variant HTTP
] + additional_origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# Configure Gemini AI
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Pydantic models for request/response
class Message(BaseModel):
    role: str
    text: str

class ChatRequest(BaseModel):
    message: str
    history: List[Message]

class ChatResponse(BaseModel):
    reply: str

class LeadRequest(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    propertyType: Optional[str] = None
    message: Optional[str] = None
    source: Optional[str] = None

class LeadResponse(BaseModel):
    success: bool
    message: Optional[str] = None

@app.get("/")
async def root():
    return {"message": "NextEPiC Ventures API is running"}

@app.get("/cors-info")
async def cors_info():
    return {
        "message": "CORS Configuration Info",
        "allowed_origins": allowed_origins,
        "total_origins": len(allowed_origins)
    }

@app.get("/test-origin")
async def test_origin(req: Request):
    origin = req.headers.get("origin")
    referer = req.headers.get("referer")
    
    requesting_domain = None
    if origin:
        requesting_domain = origin
    elif referer:
        from urllib.parse import urlparse
        parsed = urlparse(referer)
        requesting_domain = f"{parsed.scheme}://{parsed.netloc}"
    
    is_allowed = requesting_domain in allowed_origins if requesting_domain else False
    
    return {
        "requesting_origin": origin,
        "requesting_referer": referer,
        "requesting_domain": requesting_domain,
        "is_allowed": is_allowed,
        "allowed_origins": allowed_origins
    }

@app.get("/models")
async def list_models():
    try:
        models = []
        for model in genai.list_models():
            if 'generateContent' in model.supported_generation_methods:
                models.append(model.name)
        return {"available_models": models}
    except Exception as e:
        return {"error": str(e), "available_models": []}

@app.post("/api/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest, req: Request):
    # Check if the request origin is allowed
    origin = req.headers.get("origin")
    referer = req.headers.get("referer")
    
    # Get the requesting domain from origin or referer
    requesting_domain = None
    if origin:
        requesting_domain = origin
    elif referer:
        # Extract domain from referer URL
        from urllib.parse import urlparse
        parsed = urlparse(referer)
        requesting_domain = f"{parsed.scheme}://{parsed.netloc}"
    
    # Check if the requesting domain is in allowed origins
    if requesting_domain and requesting_domain not in allowed_origins:
        raise HTTPException(
            status_code=403, 
            detail=f"Access denied. Origin '{requesting_domain}' is not authorized to use this API."
        )
    
    try:
        # Configure the AI Model - try basic model name
        model = genai.GenerativeModel(model_name="gemini-1.5-flash-latest")
        
        # System instruction as the first message
        system_message = """You are the official NextEPiC Ventures virtual assistant. 

        ### CORE RULES:
        1. **GATEKEEPER**: You MUST NOT answer any questions about real estate or the company until you have received both a NAME and an EMAIL address in the chat history.
        2. **GATEKEEPER RESPONDS**: If the user tries to ask a question without giving their details, you MUST reply: "Sorry sir/ mam, we are trying to make this chat more personalized and secure so we are expecting you to give your name and mail."
        3. **PERSONNEL**: Only mention Anil Kumar T (Founder & Managing Partner). Never mention other partners.
        4. **WITTY ADVERTISEMENT REDIRECTION**: If the user asks about ANY off-topic or irrelevant things (food, movies, hobbies, sports, travel plans, etc.) AFTER providing their info, you MUST acknowledge it with a clever remark and instantly pivot it into a luxury advertisement for NextEPiC Ventures.
           *Example Strategy*: "A [user's topic] is a wonderful indulgence, but imagine experiencing that from the comfort of a premium [residential/commercial] estate curated by NextEPiC Ventures. Now that is the ultimate lifestyle upgrade."
        5. **ULTIMATE RESPECT**: If the user scolds you or uses foul language, respond with "Ultimate Respect"—staying perfectly professional, calm, and ultra-polite.

        ### KNOWLEDGE BASE (Only share after Name/Email is received):
        1. Home/Hero: NextEPiC Ventures - Where Real Estate Meets Vision, Integrity, and Results. Trusted partner for premium residential, commercial, and investment real estate in Bengaluru.
        2. About: Boutique real estate agency built on excellence and discretion. Specialized in high-value properties across Bengaluru growth corridors.
        3. Services:
           - Premium Residential: Luxury homes, villas, upscale apartments.
           - Commercial & Retail Leasing: Prime office spaces and retail hubs.
           - Industrial & Warehouse: Logistics, warehouses, last-mile facilities.
           - Investment Advisory: Portfolio analysis, yield assessment, risk-return structuring.
           - Property Management: Discreet, premium-tier management and maintenance.
           - NRI Services: End-to-end remote support for Non-Resident Indians (legal clearance, tax-efficient structures, documentation).
        4. Leadership: Anil Kumar T (Founder & Managing Partner). Visionary, process-oriented, focused on integrity and long-term value.
        5. Contact: Email (info@nextepicventures.com), Phone (+91 XXXX XXX XXX), Address (Flat No. 235, Mahaveer Calyx Apartment, BTM 4th Stage, Bengaluru – 560076).

        Keep answers brief, professional, and friendly."""

        # Format chat history for Gemini
        chat_history = [
            {"role": "user", "parts": [{"text": system_message}]},
            {"role": "model", "parts": [{"text": "Understood. I am the NextEPiC Ventures virtual assistant and will follow all the rules you've outlined."}]}
        ]
        
        # Add user's chat history
        for msg in request.history:
            role = "model" if msg.role == "model" else "user"
            chat_history.append({
                "role": role,
                "parts": [{"text": msg.text}]
            })

        # Start chat with history
        chat = model.start_chat(history=chat_history)
        
        # Send the new message
        response = chat.send_message(request.message)
        
        return ChatResponse(reply=response.text)
        
    except Exception as e:
        print(f"Chat API Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Chat API Error: {str(e)}")

@app.post("/api/webhook-lead", response_model=LeadResponse)
async def webhook_lead(request: LeadRequest, req: Request):
    # Check if the request origin is allowed
    origin = req.headers.get("origin")
    referer = req.headers.get("referer")
    
    # Get the requesting domain from origin or referer
    requesting_domain = None
    if origin:
        requesting_domain = origin
    elif referer:
        # Extract domain from referer URL
        from urllib.parse import urlparse
        parsed = urlparse(referer)
        requesting_domain = f"{parsed.scheme}://{parsed.netloc}"
    
    # Check if the requesting domain is in allowed origins
    if requesting_domain and requesting_domain not in allowed_origins:
        raise HTTPException(
            status_code=403, 
            detail=f"Access denied. Origin '{requesting_domain}' is not authorized to use this API."
        )
    
    try:
        # Setup Google Sheets Authentication
        credentials_json = os.getenv("GOOGLE_SHEETS_CREDENTIALS")
        if not credentials_json:
            raise HTTPException(status_code=500, detail="Missing Google Sheets Configuration")
        
        credentials_dict = json.loads(credentials_json)
        
        # Fix the private key formatting
        if 'private_key' in credentials_dict:
            credentials_dict['private_key'] = credentials_dict['private_key'].replace('\\n', '\n')
        
        credentials = Credentials.from_service_account_info(
            credentials_dict,
            scopes=["https://www.googleapis.com/auth/spreadsheets"]
        )
        
        service = build('sheets', 'v4', credentials=credentials)
        
        # Prepare the data row
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        values = [[
            timestamp,
            request.name or "N/A",
            request.email or "N/A", 
            request.phone or "N/A",
            request.propertyType or "N/A",
            request.message or "N/A",
            request.source or "Unknown"
        ]]
        
        # Append to Google Sheets
        sheet_id = os.getenv("GOOGLE_SHEET_ID")
        if not sheet_id:
            raise HTTPException(status_code=500, detail="Missing Google Sheet ID")
            
        result = service.spreadsheets().values().append(
            spreadsheetId=sheet_id,
            range="Sheet1!A1",
            valueInputOption="USER_ENTERED",
            body={"values": values}
        ).execute()
        
        return LeadResponse(success=True, message="Lead saved successfully")
        
    except Exception as e:
        print(f"Webhook Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to save lead: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)