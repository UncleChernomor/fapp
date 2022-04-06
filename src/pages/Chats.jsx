import React, { useEffect, useRef, useState } from "react";
import { MessageContext } from '../context';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ChatList from "../components/ChatList.jsx";
import MessageForm from "../components/MessageForm.jsx";
import { useParams, Outlet } from "react-router-dom";

function Chats(props) {

    const [messages, setMessageList] = useState([
        {
            id: 1,
            chatId: 1,
            author: 'vasya',
            title: 'message 1',
            body: 'message 1 body there'
        },
        {
            id: 2,
            chatId: 1,
            author: 'fedya',
            title: 'message 2',
            body: 'message 2 body there'
        },
        {
            id: 3,
            chatId: 2,
            author: 'vasya',
            title: 'message 3',
            body: 'message 3 body there'
        },
    ]);

    function createMessage(message) {
        console.log('chats new message');
        setMessageList([...messages, message]);
    }

    let params = useParams();

    // useEffect(() => {
    //     if (author.length > 0) {
    //         const name = author;
    //         setTimeout(() => {
    //             console.log('привет - ' + name);
    //         }, 1500);
    //     }

    //     //Настроить фокус --- НЕ ЗАБЫТЬ!!!
    //     // refFocus.current?.focus():null;
    // }, [message]);

    return (
        <MessageContext.Provider value={{ messages, setMessageList }}>
            <Box maxWidth='lg'>
                <CssBaseline />
                <MessageForm createMsg={createMessage} />
                <Box sx={{
                    display: "flex",
                    p: 2
                }}>
                    <ChatList />
                    <Outlet />
                    {/* <Chat msgs={(messages.filter((msg) => msg.chatId === parseInt(params.chatId)))} /> */}
                </Box>
            </Box>
        </MessageContext.Provider >
    );
}

export default Chats;