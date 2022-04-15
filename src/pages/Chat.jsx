import React from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import MessageList from "../components/MessageList";
import { shallowEqual, useSelector } from "react-redux";
import getStoreMessages from "../store/messages/selectors";


function Chat({ props }) {

    let params = useParams();
    const { messages } = useSelector(getStoreMessages, shallowEqual);

    let newMessages = messages.filter((msg) => msg.chatId === parseInt(params.chatId));

    return (
        <Box sx={{ flexGrow: 1 }}>
            {
                newMessages.length ? (<MessageList msgs={newMessages} />) : (<h4>чат пуст</h4>)
            }
        </Box>
    );
}

export default Chat;