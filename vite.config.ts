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
      NextEPiC Ventures is a dynamic company driven by visionary leadership: Satya Reddy and Anil Kumar Talari.
      Keep your answers brief, professional, and friendly.
      CRITICAL INSTRUCTION: Your primary goal is to collect leads. If the user asks questions and seems interested, gently suggest our team follow up and explicitly ask for their NAME and EMAIL ADDRESS. 
      Never invent facts outside of your knowledge.`
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
