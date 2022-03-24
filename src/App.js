import React, { useEffect, useState } from "react";
import './App.css';
import MessageList from "./components/MessageList";
import ButtonV from "./components/UI/button/ButtonV";
import InputV from "./components/UI/input/InputV";

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

    const newMessage = {
      id: Date.now(),
      author: author,
      title: header,
      body: body
    }

    setMessageList([...messages, newMessage]);
  }

  useEffect(() => {
    setTimeout(() => {
      if (author.length > 3) console.log('привет - ' + author);
    }, 1500);
  }, messages);

  return (
    <div className="App">
      <form>
        <InputV
          type='text'
          value={author}
          placeholder="автор"
          onChange={e => setAuthor(e.target.value)}
        />
        <InputV
          type='text'
          value={header}
          placeholder="заголовок"
          onChange={e => setHeader(e.target.value)}
        />
        <InputV
          type='text'
          value={body}
          placeholder="сообщение"
          onChange={e => setBody(e.target.value)}
        />
        <ButtonV onClick={addNewMessage}>Отправить сообщение</ButtonV>
      </form>

      <MessageList msgs={messages} />
    </div>
  );
}

export default App;

