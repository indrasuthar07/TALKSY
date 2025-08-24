// src/pages/ChatAI.jsx
import { useState } from "react";
import { SendIcon, BotIcon, UserIcon } from "lucide-react";

const ChatAI = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I’m your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const aiResponse = await new Promise((resolve) =>
        setTimeout(() => resolve(`You said: "${userMessage.text}" 🤖`), 800)
      );

      setMessages((prev) => [...prev, { sender: "bot", text: aiResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error fetching AI response. Please try again." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-base-200">
      {/* HEADER */}
      <header className="p-4 bg-base-300 border-b border-base-100 flex items-center gap-3">
        <BotIcon className="text-primary size-6" />
        <h1 className="text-xl font-bold">Chat with AI</h1>
      </header>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="p-2 bg-primary/20 rounded-full">
                <BotIcon className="size-5 text-primary" />
              </div>
            )}
            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] ${
                msg.sender === "user"
                  ? "bg-primary text-primary-content"
                  : "bg-base-300 text-base-content"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <div className="p-2 bg-primary/20 rounded-full">
                <UserIcon className="size-5 text-primary" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-sm opacity-70">
            <BotIcon className="size-4 animate-spin" />
            Thinking...
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="p-4 border-t border-base-300 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="input input-bordered flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="btn btn-primary" onClick={handleSend} disabled={isLoading}>
          <SendIcon className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatAI;
