import { GoogleGenerativeAI } from '@google/generative-ai';

// Ensure the API key is strictly required to run
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Using standard Node.js request/response
export default async function handler(req: any, res: any) {
  // Set CORS headers for all responses universally
  Object.keys(corsHeaders).forEach(key => {
    res.setHeader(key, (corsHeaders as any)[key]);
  });

  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const { message, history } = req.body || {};

    // Configure the AI Model
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      systemInstruction: `You are the official NextEPiC Ventures virtual assistant. 

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

      Keep answers brief, professional, and friendly.`
    });

    // Format the previous chat history so the AI has context
    const chat = model.startChat({
      history: (history || [])
        .filter((msg: any) => msg.role !== 'system') // Filter out any internal errors
        .map((msg: any) => ({
          role: msg.role === 'model' ? 'model' : 'user',
          parts: [{ text: msg.text }],
        })),
    });

    // Send the new message to Gemini
    const result = await chat.sendMessage(message);
    const text = await result.response.text();

    return res.status(200).json({ reply: text });
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    const errorMessage = error?.message || "Internal Server Error";
    return res.status(500).json({ error: errorMessage });
  }
}
