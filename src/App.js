import React, { useState } from "react";
import './App.css';
import MessageList from "./components/MessageList";

function App(props) {
  //const message = 'HI ALL';
  const [messages, setMessageList] = useState([
    {
      id: 1,
      title: 'message 1',
      body: 'message 1 body there'
    },
    {
      id: 2,
      title: 'message 2',
      body: 'message 2 body there'
    },
    {
      id: 3,
      title: 'message 3',
      body: 'message 3 body there'
    },
  ]);


  return (
    <div className="App">
      <form>
        <input type='text' placeholder="заголовок" />
        <input type='text' placeholder="сообщение" />
        <button>Добавить</button>
      </form>

      <MessageList msgs={messages} />
    </div>
  );
}

export default App;

