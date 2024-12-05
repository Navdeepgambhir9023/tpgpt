import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import KnowledgeBase from "./pages/KnowledgeBase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/knowledge-base" element={<KnowledgeBase />} />
    </Routes>
  );
}

export default App;
