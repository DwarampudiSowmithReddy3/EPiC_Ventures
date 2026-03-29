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
