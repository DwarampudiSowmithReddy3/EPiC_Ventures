import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import Lottie from "lottie-react";

type Message = {
  role: "user" | "model";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    // Initializer function for state to prevent SSR issues or unnecessary re-renders
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nextepic_chat_messages");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse saved messages", e);
        }
      }
    }
    return [
      {
        role: "model",
        text: "Welcome to NextEPiC Ventures. To provide you with personalized premium real estate advisory, may I start with your Name and Email address for a private consultation?",
      },
    ];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lottieData, setLottieData] = useState<any>(null);
  const [hasSentLead, setHasSentLead] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("nextepic_chat_has_sent_lead") === "true";
    }
    return false;
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load Lottie animation from public folder
  useEffect(() => {
    fetch("/AI_logo_Foriday.json")
      .then((res) => {
        if (!res.ok) throw new Error("Lottie not found");
        return res.json();
      })
      .then((data) => setLottieData(data))
      .catch(() => console.log("Lottie animation not found yet."));
  }, []);

  // Persist state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nextepic_chat_messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("nextepic_chat_has_sent_lead", hasSentLead.toString());
    }
  }, [hasSentLead]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const newMessages = [...messages, { role: "user" as const, text: userText }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    // Email Detection Logic
    const emailMatch = userText.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch && !hasSentLead) {
      const email = emailMatch[0];
      
      // Extraction cleanup:
      // If user typed "Name, Email" or "Name Email", try to pull the name part
      let name = "";
      const segments = userText.split(/[,|\s]+/).map(s => s.trim()).filter(Boolean);
      const emailIndex = segments.findIndex(s => s.includes("@"));
      
      if (emailIndex !== -1) {
        // Take segments before the email as the name (up to 2 words usually)
        name = segments.slice(0, emailIndex).join(" ");
      }
      
      // If name is empty, try looking after the email if it's there
      if (!name && emailIndex !== -1 && segments.length > emailIndex + 1) {
        name = segments.slice(emailIndex + 1).join(" ");
      }

      setHasSentLead(true);

      // Quietly fire off the lead to the webhook API
      fetch("/api/webhook-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: name.trim() || "User",
          email: email, 
          phone: "N/A",
          propertyType: "N/A",
          // Join the last few messages as a summary of what they wanted
          message: messages.slice(-4).map(m => `${m.role}: ${m.text}`).join(" | ") + ` | user: ${userText}`,
          source: "Chatbot"
        }),
      }).catch(err => console.log("Webhook failed silently:", err));
    }

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText, history: messages.slice(1) }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to communicate with chat API: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      const text = data.reply;
      setMessages((prev) => [...prev, { role: "model", text: text }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Sorry, I am having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-80 md:w-96 h-[500px] max-h-[80vh] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 text-white dark:bg-zinc-800">
              <div className="flex items-center gap-2">
                {lottieData ? (
                  <div className="w-8 h-8">
                    <Lottie animationData={lottieData} loop={true} />
                  </div>
                ) : (
                  <Bot size={20} className="text-zinc-300" />
                )}
                <h3 className="font-semibold text-sm">NextEPiC Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-zinc-700 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50 dark:bg-zinc-950/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === "user"
                        ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        : "bg-transparent text-white"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User size={14} />
                    ) : lottieData ? (
                      <Lottie animationData={lottieData} loop={true} className="w-8 h-8" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-zinc-800 flex items-center justify-center">
                        <Bot size={14} />
                      </div>
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === "user"
                        ? "bg-zinc-900 text-white dark:bg-zinc-200 dark:text-zinc-900 rounded-tr-sm"
                        : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-sm shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-zinc-900 dark:bg-zinc-800 text-white flex items-center justify-center">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-2 flex items-center justify-center min-w-[60px] shadow-sm">
                    <Loader2 size={16} className="animate-spin text-zinc-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-zinc-100 dark:bg-zinc-950 border-none rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/20 dark:focus:ring-white/20 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="shrink-0 p-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} className="translate-x-[1px] translate-y-[-1px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-full shadow-xl shadow-black/20 dark:shadow-white/10 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-50 p-2"
      >
        {isOpen ? (
          <X size={24} />
        ) : lottieData ? (
          <Lottie animationData={lottieData} loop={true} className="w-full h-full object-cover" />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>
    </>
  );
}
