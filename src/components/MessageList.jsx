import React from "react";
import Stack from "@mui/material/Stack";
import Message from "./Message";

const MessageList = function ({ msgs }) {

    return (
        <Stack
            sx={{
                width: "100 %",
                backgroundColor: "info.main",
                p: 1
            }}
        >
            {
                msgs.map((message) => <Message msg={message} key={message.id} />)
            }
        </Stack>
    );
}

export default MessageList;