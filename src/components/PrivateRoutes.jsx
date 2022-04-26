import React from 'react';
import Home from "../pages/Home.jsx";
import Profile from "../pages/Profile.jsx";
import Chats from "../pages/Chats.jsx";
import Chat from "../pages/Chat.jsx";
import NoFoundPage from "../pages/NoFoundPage.jsx";
import WorkWithApi from "../pages/WorkWithApi.jsx";
import { Route, Routes } from 'react-router-dom';

function PrivateRoutes(props) {
    return (
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats" element={<Chats />}>
                <Route index element={
                    <main>
                        <h2 style={{ alignItems: 'center' }}>Choose chat</h2>
                    </main>} />
                <Route path=":chatId" element={<Chat />} />
                <Route path="*" element={<NoFoundPage />} />
            </Route>
            <Route path="/useapi" element={<WorkWithApi />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoFoundPage />} />
        </Routes>
    );
}

export default PrivateRoutes;