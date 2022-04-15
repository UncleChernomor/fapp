import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import MessageList from "../components/MessageList";
import { MessageContext } from "../context";
import { useSelector } from "react-redux";


function Chat({ props }) {

    let params = useParams();
    const { messages } = useSelector((state) => state.messages);

    let newMessage = messages.filter((msg) => msg.chatId === parseInt(params.chatId));

    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                newMessage.length ? (<MessageList msgs={newMessage} />) : (<h4>чат пуст</h4>)
            }
        </Box>
    );
}

export default Chat;