import React, { useState } from "react";
// import '../App.css'

// Predefined Q&A (you can extend this)
const predefinedQA = {
  "Who is Ebedi?":
    "Ebedi Meleck is a passionate full-stack developer from Rwanda. He’s skilled in Java, JavaScript, React, and backend technologies. He's the founder of Ebyte Code Labs.",
  "What does Ebedi do?":
    "Ebedi Meleck builds web and mobile apps, and mentors students and graduates in tech. He’s currently working on AI, job-matching platforms, and accessible tech.",
  "How can I contact Ebedi?":
    "You can reach Ebedi via email at ituzeebedi12@gmail.com or LinkedIn at www.linkedin.com/in/ituze-agacyo-ebed-meleck-65a13b2b7.",

  "Who built this chatbot?":
    "This chatbot was built by Ebedi Meleck as part of his AI assistant initiative ",
};

function GeminiChat() {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const predefinedQuestions = Object.keys(predefinedQA);

  const handlePromptClick = (question) => {
    setPrompt(question);
    handleAsk(question);
  };

  const handleAsk = async (inputPrompt = prompt) => {
    const trimmedPrompt = inputPrompt.trim();
    if (!trimmedPrompt) return;

    const lowerPrompt = trimmedPrompt.toLowerCase();
    const matchedKey = Object.keys(predefinedQA).find(
      (key) => key.toLowerCase() === lowerPrompt
    );

    const newChat = { question: trimmedPrompt, answer: "" };
    setChatHistory((prev) => [...prev, newChat]);
    setPrompt("");
    setLoading(true);

    if (matchedKey) {
      // Answer instantly if found in predefined
      setTimeout(() => {
        setChatHistory((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].answer = predefinedQA[matchedKey];
          return updated;
        });
        setLoading(false);
      }, 400);
      return;
    }
    const baseURL =
      "https://ebedimeleck-engineer.onrender.com" || "http://localhost:5000";
    // Call Gemini backend
    try {
      const res = await fetch(`${baseURL}/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmedPrompt }),
      });

      const data = await res.json();
      if (!data.answer) throw new Error("No answer");

      setChatHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].answer = data.answer;
        return updated;
      });
    } catch (err) {
      setPrompt(trimmedPrompt);
      setChatHistory((prev) => prev.slice(0, -1));
      alert(" Error: AI did not respond.");
    }

    setLoading(false);
  };

  return (
    <div className="chat-container my-4">
      <div className="chat-window shadow">
        <div className="chat-header">
          <h2>💬 Chat With eMerc.ai</h2>
        </div>

        {/* Suggestion Chips */}
        <div
          className="suggestion-buttons"
          style={{
            padding: "5px",
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
          }}
        >
          {predefinedQuestions.map((question, idx) => (
            <button
              key={idx}
              className="suggestion-btn"
              onClick={() => handlePromptClick(question)}
            >
              {question}
            </button>
          ))}
        </div>

        {/* Chat Body */}
        <div className="chat-body">
          {chatHistory.map((chat, index) => (
            <div key={index} className="chat-message-wrapper">
              <div className="chat-bubble user-bubble">
                <div className="bubble-content">
                  <span className="chat-icon user-icon">👤</span>
                  <p>{chat.question}</p>
                </div>
              </div>
              <div className="chat-bubble gemini-bubble">
                <div className="bubble-content">
                  <span className="chat-icon ai-icon">🤖</span>
                  <p>{chat.answer}</p>
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="chat-message-wrapper">
              <div className="chat-bubble gemini-bubble loading-bar">
                <div className="bubble-content">
                  <span className="chat-icon ai-icon">🤖</span>
                  <div className="bar-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Footer */}
        <div
          className="chat-footer"
          style={{ position: "relative", width: "100%" }}
        >
          <textarea
            className="form-control"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleAsk()}
            rows={2}
            style={{
              resize: "none",
              paddingRight: "60px", // space for button inside textarea
            }}
          />
          <button
            onClick={() => handleAsk()}
            disabled={loading}
            style={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00695c",
              color: "#fff",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {loading ? "..." : "➤"}
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            style={{
              bottom: "10px",
              right: "15px",
              fontSize: "11px",
              color: "#999",
              opacity: 0.8,
              fontStyle: "italic",
              padding:"5px"
            }}
          >
            powered by Google Gemini 2.0 Flash
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeminiChat;
