import React from "react";
import './Message.css';

const Message = function (props) {
    return (
        <div className="Message">
            <h2>{props.msg.title}</h2>
            <p>{props.msg.body}</p>
        </div>
    );
}

export default Message;