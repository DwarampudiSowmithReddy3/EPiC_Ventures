import { GoogleGenerativeAI } from '@google/generative-ai';

// Ensure the API key is strictly required to run
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const config = {
  runtime: 'edge', // Edge functions are faster and completely free
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { message, history } = await req.json();

    // Configure the AI Model
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are the official NextEPiC Ventures virtual assistant. 
      NextEPiC Ventures is a dynamic company driven by visionary leadership: Satya Reddy and Anil Kumar Talari.
      Keep your answers brief, professional, and friendly.
      CRITICAL INSTRUCTION: Your primary goal is to collect leads. If the user asks questions and seems interested, gently suggest our team follow up and explicitly ask for their NAME and EMAIL ADDRESS. 
      Never invent facts outside of your knowledge.`
    });

    // Format the previous chat history so the AI has context
    const chat = model.startChat({
      history: history
        .filter((msg: any) => msg.role !== 'system') // Filter out any internal errors
        .map((msg: any) => ({
          role: msg.role === 'model' ? 'model' : 'user',
          parts: [{ text: msg.text }],
        })),
    });

    // Send the new message to Gemini
    const result = await chat.sendMessage(message);
    const text = await result.response.text();

    return new Response(JSON.stringify({ reply: text }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return new Response(
      JSON.stringify({ error: "Sorry, I am having trouble connecting to my brain right now." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
