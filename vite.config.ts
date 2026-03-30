import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { google } from "googleapis";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables so Vite can use them securely in its backend Dev Server
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      {
        name: 'local-api-chat',
        configureServer(server) {
          server.middlewares.use('/api/chat', (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk.toString(); });
              req.on('end', async () => {
                try {
                  const { message, history } = JSON.parse(body);
                  
                  if (!env.GEMINI_API_KEY) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: "Missing GEMINI_API_KEY" }));
                  }

                  // Dynamically import to avoid slowing down base Vite server
                  const { GoogleGenerativeAI } = await import('@google/generative-ai');
                  const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);
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

                  const chat = model.startChat({
                    history: history ? history.filter((msg: any) => msg.role !== 'system').map((msg: any) => ({
                      role: msg.role === 'model' ? 'model' : 'user',
                      parts: [{ text: msg.text }],
                    })) : []
                  });

                  const result = await chat.sendMessage(message);
                  const text = await result.response.text();

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ reply: text }));
                } catch (error: any) {
                  console.error("Local Chat Error:", error);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: error.message || "Failed to connect to AI locally" }));
                }
              });
            } else {
              next();
            }
          });
        }
      },
      {
        name: 'local-api-webhook-lead',
        configureServer(server) {
          server.middlewares.use('/api/webhook-lead', (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', async () => {
                try {
                  const payload = JSON.parse(body);
                  const { email, conversation } = payload;

                  if (!env.GOOGLE_SHEETS_CREDENTIALS) {
                    console.error("Missing Google Sheets Config in .env");
                    res.statusCode = 500;
                    return res.end(JSON.stringify({ error: "Missing config" }));
                  }

                  const credentials = JSON.parse(env.GOOGLE_SHEETS_CREDENTIALS);
                  // Ensure newlines are correctly parsed
                  const privateKey = credentials.private_key.replace(/\\n/g, '\n');
                  
                  const jwtClient = new google.auth.JWT({
                    email: credentials.client_email,
                    key: privateKey,
                    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
                  });
                  // Explicitly fetch the token (Throws errors early if key is broken)
                  await jwtClient.authorize();

                  const sheets = google.sheets({ version: "v4", auth: jwtClient });

                  // Append Lead locally
                  await sheets.spreadsheets.values.append({
                    spreadsheetId: env.GOOGLE_SHEET_ID,
                    range: "Sheet1!A1",
                    valueInputOption: "USER_ENTERED",
                    requestBody: {
                      values: [[new Date().toLocaleString(), email, conversation || "Local Dev Lead"]],
                    },
                  });

                  console.log("Local Webhook: Successfully saved lead for", email);
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true }));

                } catch (error) {
                  console.error("Local Webhook Error:", error);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: "Failed to save lead locally" }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
  };
});
