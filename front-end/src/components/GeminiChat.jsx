import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiPaperclip, FiSettings, FiGrid, FiImage, FiZap, FiFileText, FiCode } from "react-icons/fi";

// Predefined Q&A
const predefinedQA = {
  "Who is Ebedi?": "Ebedi Meleck is a passionate full-stack developer from Rwanda skilled in Java, JavaScript, and React. He's the founder of Ebyte Code Labs.",
  "What does Ebedi do?": "Ebedi builds web and mobile apps and mentors students. He is currently focused on AI and accessible tech.",
  "How can I contact Ebedi?": "You can reach Ebedi at ituzeebedi12@gmail.com or via LinkedIn.",
};

function GeminiChat() {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, loading]);

  const handleAsk = async (inputPrompt = prompt) => {
    const trimmedPrompt = inputPrompt.trim();
    if (!trimmedPrompt) return;

    setChatHistory((prev) => [...prev, { question: trimmedPrompt, answer: "" }]);
    setPrompt("");
    setLoading(true);

    const lowerPrompt = trimmedPrompt.toLowerCase();
    const matchedKey = Object.keys(predefinedQA).find(k => k.toLowerCase() === lowerPrompt);

    if (matchedKey) {
      setTimeout(() => {
        setChatHistory(prev => {
          const updated = [...prev];
          updated[updated.length - 1].answer = predefinedQA[matchedKey];
          return updated;
        });
        setLoading(false);
      }, 600);
      return;
    }

    try {
      const res = await fetch("https://ebedimeleck-engineer.onrender.com/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmedPrompt }),
      });
      const data = await res.json();
      setChatHistory(prev => {
        const updated = [...prev];
        updated[updated.length - 1].answer = data.answer;
        return updated;
      });
    } catch (err) {
      setChatHistory(prev => prev.slice(0, -1));
      alert("AI failed to respond.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden relative">
      
      {/* Background Glows (Updated to Neutral Gray/White) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 1. The Glowing AI Orb (Monochromatic Silver/White) */}
      <div className="relative mb-12 group">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-gray-400 via-gray-600 to-white animate-pulse blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
        <div className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-tr from-gray-300 to-gray-700 shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/20 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"></div>
        </div>
      </div>

      {/* 2. Headline */}
      <h1 className="text-3xl md:text-5xl font-medium text-center mb-10 tracking-tight text-white">
        Ready to Create Something New?
      </h1>

      {/* 3. Top Action Chips (Black & Gray) */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <ActionButton icon={<FiImage />} text="Create Image" />
        <ActionButton icon={<FiZap />} text="Brainstorm" />
        <ActionButton icon={<FiFileText />} text="Make a plan" />
      </div>

      {/* 4. Chat Display */}
      {chatHistory.length > 0 && (
        <div className="w-full max-w-3xl max-h-[40vh] overflow-y-auto mb-6 space-y-4 px-2 scrollbar-hide">
          {chatHistory.map((chat, i) => (
            <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="text-right mb-2">
                <span className="inline-block bg-white/10 px-4 py-2 rounded-2xl text-sm border border-white/5 text-gray-200">
                  {chat.question}
                </span>
              </div>
              {chat.answer && (
                <div className="text-left text-gray-400 bg-[#111] p-4 rounded-2xl border border-white/5 text-sm leading-relaxed">
                  {chat.answer}
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-1 p-2">
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      )}

      {/* 5. Main Command Bar (Black Glassmorphism) */}
      <div className="w-full max-w-3xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-2 shadow-2xl relative">
        <div className="flex items-center px-4 py-2">
           <span className="text-gray-400 mr-3 text-xl">✦</span>
           <input 
            type="text" 
            placeholder="Ask eMarc anything..."
            className="w-full bg-transparent border-none outline-none text-white placeholder:text-gray-600 py-3"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
           />
        </div>
        
        {/* Input Tools Row */}
        <div className="flex items-center justify-between border-t border-white/5 px-4 py-2 mt-1">
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <button className="flex items-center gap-1 hover:text-white transition-colors"><FiPaperclip /> Attach</button>
            <button className="flex items-center gap-1 hover:text-white transition-colors"><FiSettings /> Settings</button>
            <button className="flex items-center gap-1 hover:text-white transition-colors"><FiGrid /> Options</button>
          </div>
          <button 
            onClick={() => handleAsk()}
            className="bg-white hover:bg-gray-200 p-2.5 rounded-full transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            <FiSend className="text-black" />
          </button>
        </div>
      </div>

      {/* 6. Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-8">
        <FeatureCard icon={<FiImage />} title="Image Generator" desc="Create high-quality images from text." />
        <FeatureCard icon={<FiFileText />} title="AI Presentation" desc="Turn ideas into professional slides." />
        <FeatureCard icon={<FiCode />} title="Dev Assistant" desc="Generate clean, production-ready code." />
      </div>

      <p className="mt-8 text-[10px] text-gray-600 uppercase tracking-widest font-medium">
        Powered by eMerc.ai & Google Gemini 2.0
      </p>
    </div>
  );
}

// Sub-components
const ActionButton = ({ icon, text }) => (
  <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 text-gray-300">
    <span className="text-gray-500">{icon}</span> {text}
  </button>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-5 bg-[#111] border border-white/5 rounded-3xl hover:bg-white/5 transition-all cursor-pointer group">
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="font-bold text-gray-200 mb-1">{title}</h3>
    <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default GeminiChat;