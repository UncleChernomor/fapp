import React from "react";
import Message from "./Message";

const MessageList = function ({ msgs }) {

    return (
        <div>
            {
                msgs.map((message) => <Message msg={message} key={message.id} />)
            }
        </div>
    );
}

export default MessageList;