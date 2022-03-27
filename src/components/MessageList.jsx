import React from "react";
import Stack from "@mui/material/Stack";
import Message from "./Message";

const MessageList = function ({ msgs }) {

    return (
        <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="stretch"
        >
            {
                msgs.map((message) => <Message msg={message} key={message.id} />)
            }
        </Stack>
    );
}

export default MessageList;