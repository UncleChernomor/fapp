import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Chats from "./pages/Chats.jsx";
import Chat from "./pages/Chat.jsx";
import NoFoundPage from "./pages/NoFoundPage.jsx";
import Layout from "./pages/Layout.jsx";

function App(props) {

  return (
    <>
      <Layout />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />}>
          <Route index element={
            <main>
              <h2>Choose chat</h2>
            </main>} />
          <Route path=":chatId" element={<Chat />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </>

  );
}

export default App;

