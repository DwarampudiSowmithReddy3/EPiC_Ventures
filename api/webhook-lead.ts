// This endpoint will be triggered either by the frontend or by Gemini directly via function calling 
// when it detects an email. For now, it's a skeleton ready for the Resend API implementation!

import { Resend } from 'resend';

import { google } from "googleapis";

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { name, email, phone, propertyType, message, source } = await req.json();

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

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error("Webhook Error:", error);
    return new Response(JSON.stringify({ error: "Failed to save lead" }), { status: 500 });
  }
}
