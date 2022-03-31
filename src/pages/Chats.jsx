import React, { useEffect, useRef, useState } from "react";
import MessageList from "../components/MessageList";
import ButtonV from "../components/UI/button/ButtonV";
import InputV from "../components/UI/input/InputV";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Chats(props) {
    const theme = createTheme({
        pallete: {
            info: {
                main: "#c95353",
            },
            success: {
                main: "#31d492",
            },
        }
    });

    const [messages, setMessageList] = useState([
        {
            id: 1,
            author: 'vasya',
            title: 'message 1',
            body: 'message 1 body there'
        },
        {
            id: 2,
            author: 'fedya',
            title: 'message 2',
            body: 'message 2 body there'
        },
        {
            id: 3,
            author: 'vasya',
            title: 'message 3',
            body: 'message 3 body there'
        },
    ]);
    const [chats, SetChats] = useState([
        {
            id: 1,
            name: "chat 1"
        },
        {
            id: 2,
            name: "chat 2"
        },
        {
            id: 3,
            name: "chat 3"
        },
    ]);

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
        <Container maxWidth='lg'>
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
                <nav aria-label="secondary mailbox folders">
                    <ThemeProvider theme={theme}>
                        <List sx={{
                            backgroundColor: "info.main",
                            color: ""
                        }}>
                            {
                                chats.map((item) =>
                                    <ListItem disablePadding key={item.id}>
                                        <ListItemButton>
                                            <ListItemText>{item.name}</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            }
                        </List>
                    </ThemeProvider>

                </nav>

                <Box sx={{ flexGrow: 1 }}>
                    <MessageList msgs={messages} />
                </Box>
            </Box>
        </Container>
    );
}

export default Chats;