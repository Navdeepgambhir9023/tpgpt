// pages/KnowledgeBase.js
import React, { useState } from "react";
import axios from "axios";

const KnowledgeBase = () => {
  const [akbEntries, setAkbEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddEntry = async () => {
    try {
      const response = await axios.post(
        "https://tpgptbackend.vercel.app/api/akb/akb",
        { title, content },
        { headers: { password: localStorage.getItem("authToken") } }
      );
      setAkbEntries([...akbEntries, response.data]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding AKB entry:", error);
    }
  };


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Knowledge Base</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full mb-2"
        />
        <button
          onClick={handleAddEntry}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Entry
        </button>
      </div>
    </div>
  );
};

export default KnowledgeBase;
