// This endpoint will be triggered either by the frontend or by Gemini directly via function calling 
import { google } from "googleapis";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Using standard Node.js request/response for Vercel Serverless Functions
export default async function handler(req: any, res: any) {
  // Set CORS headers for all responses
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, (corsHeaders as any)[key]);
  });

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    // Vercel automatically parses JSON bodies in Node.js runtime
    const { name, email, phone, propertyType, message, source } = req.body || {};

    // 1. Setup Google Sheets Authentication
    if (!process.env.GOOGLE_SHEETS_CREDENTIALS) {
      throw new Error("Missing Google Sheets Configuration");
    }

    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS);
    const privateKey = credentials.private_key.replace(/\\n/g, '\n');
    
    const jwtClient = new google.auth.JWT({
      email: credentials.client_email,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });
    
    await jwtClient.authorize();

    const sheets = google.sheets({ version: "v4", auth: jwtClient });

    // 2. Append the Lead to the Sheet
    // Expected Columns: Timestamp, Name, Email, Phone, Property Type, Message/Conversation, Source
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1", // Starts appending at the first available empty row
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString(), 
          name || "N/A", 
          email || "N/A", 
          phone || "N/A", 
          propertyType || "N/A", 
          message || "N/A", 
          source || "Unknown"
        ]],
      },
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Webhook Error:", error);
    return res.status(500).json({ error: error?.message || "Failed to save lead" });
  }
}
