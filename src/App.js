import React, { useState } from "react";
import Message from "./components/Message";
import './App.css';

function App(props) {
  const message = 'HI ALL';
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="App">
      <Message msg={message} />
    </div >
  );
}

export default App;

