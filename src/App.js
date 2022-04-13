import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Chats from "./pages/Chats.jsx";
import Chat from "./pages/Chat.jsx";
import NoFoundPage from "./pages/NoFoundPage.jsx";
import Layout from "./pages/Layout.jsx";
import { Provider } from "react-redux";
import { store } from './store';

function App(props) {

  return (
    <>
      <Provider store={store}>
        <Layout />
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
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoFoundPage />} />
        </Routes>
      </Provider>
    </>

  );
}

export default App;

