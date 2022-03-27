import React, { useEffect, useState } from "react";
import './App.css';
import MessageList from "./components/MessageList";
import ButtonV from "./components/UI/button/ButtonV";
import InputV from "./components/UI/input/InputV";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App(props) {
  let err = false;
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
  }, [messages]);

  return (
    <Container maxWidth='lg' sx="border: 1px solid red">
      <CssBaseline />
      <Box
        component="form"
      >
        <InputV
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

      <MessageList msgs={messages} />
    </Container>
  );
}

export default App;

