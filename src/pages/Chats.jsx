import React, { useEffect, useRef, useState } from "react";

import ButtonV from "../components/UI/button/ButtonV";
import InputV from "../components/UI/input/InputV";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import ChatList from "../components/ChatList.jsx";
import { Outlet } from "react-router-dom";

function Chats(props) {

    const refFocus = useRef(null);
    const [author, setAuthor] = useState('');
    const [header, setHeader] = useState('');
    const [body, setBody] = useState('');

    const addNewMessage = (e) => {
        e.preventDefault();

        if (author.length < 1 || header.length < 1 || body.length < 1) return;

        const newMessage = {
            id: Date.now(),
            author: author,
            title: header,
            body: body
        }

        setMessageList([...messages, newMessage]);
    }

    useEffect(() => {
        if (author.length > 0) {
            const name = author;
            setTimeout(() => {
                console.log('привет - ' + name);
            }, 1500);
        }

        //Настроить фокус --- НЕ ЗАБЫТЬ!!!
        // refFocus.current?.focus():null;

    }, [messages, author]);

    return (
        <Box maxWidth='lg'>
            <CssBaseline />
            <Box
                component="form"
            >
                <InputV
                    ref={refFocus}
                    type='text'
                    value={author}
                    placeholder="автор"
                    label="автор"
                    onChange={e => setAuthor(e.target.value)}
                />
                <InputV
                    type='text'
                    value={header}
                    placeholder="заголовок"
                    label="заголовок"
                    onChange={e => setHeader(e.target.value)}
                />
                <InputV
                    type='text'
                    value={body}
                    placeholder="сообщение"
                    label="сообщение"
                    onChange={e => setBody(e.target.value)}
                />
                <ButtonV onClick={addNewMessage}>Отправить сообщение</ButtonV>
            </Box>
            <Box sx={{
                display: "flex",
                p: 2
            }}>
                <ChatList />
                <Outlet />
            </Box>
        </Box>
    );
}

export default Chats;