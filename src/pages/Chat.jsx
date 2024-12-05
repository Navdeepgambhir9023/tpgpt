// pages/Chat.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const fetchChats = async () => {
    try {
      const response = await axios.get("https://tpgptbackend.vercel.app/api/chat/chats", {
        headers: { password: localStorage.getItem("authToken") },
      });
      setChatHistory(response.data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  const handleSend = async () => {
    try {
      const response = await axios.post(
        "https://tpgptbackend.vercel.app/api/chat/chat",
        { message },
        { headers: { password: localStorage.getItem("authToken") } }
      );
      setChatHistory([...chatHistory, { userMessage: message, aiResponse: response.data.llmResponse }]);
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Customer Care Chat</h1>
      </div>
      <div className="border p-4 rounded overflow-y-scroll h-96">
        {chatHistory.map((chat, index) => (
          <div key={index} className="mb-4">
            <p>
              <strong>User:</strong> {chat.userMessage}
            </p>
            <p>
              <strong>AI:</strong> {chat.aiResponse}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full mb-2"
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white py-2 px-4 rounded w-full"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
