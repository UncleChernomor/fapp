import * as React from "react";
import Stack from "@mui/material/Stack";
import Message from "./Message";
import { useSelector } from "react-redux";

const MessageList = function ({ msgs }) {
    return (
        <Stack
            sx={{
                width: "100 %",
                backgroundColor: "info.main",
                color: 'white',
                p: 2
            }}
        >
            <h4>you choosed CHAT №{msgs[0].chatId}</h4>
            {
                msgs.map((message) => <Message msg={message} key={message.id} />)
            }
        </Stack>
    );
}

export default MessageList;