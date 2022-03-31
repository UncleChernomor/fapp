import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Chats from "./pages/Chats.jsx";
import NoFoundPage from "./pages/NoFoundPage.jsx";

function App(props) {

  return (
    <>
      <header>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        <NavLink to={"/chats"}>Chats</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="*" element={<NoFoundPage />} />
      </Routes>
    </>

  );
}

export default App;

