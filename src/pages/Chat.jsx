import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import MessageList from "../components/MessageList";
import { MessageContext } from "../context";


function Chat({ props }) {

    let params = useParams();
    const { messages, SetMessageList } = useContext(MessageContext);

    let newMessage = messages.filter((msg) => msg.chatId === parseInt(params.chatId));
    console.log('чат: ' + params.chatId + ' --length: ' + newMessage.length);
    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                newMessage.length ? (<MessageList msgs={newMessage} />) : (<h4>чат пуст</h4>)
            }
        </Box>
    );
}

export default Chat;