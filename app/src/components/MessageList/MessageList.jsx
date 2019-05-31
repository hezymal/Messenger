import React from "react";
import Message from "./Message";
import "./MessageList.css";

function MessageList(props) {
    const { messages } = props;

    return (
        <ol className="MessageList">
            {messages.map(message =>
                <Message key={message.id} isReceived={message.isReceived}>
                    {message.text}
                </Message>
            )}
        </ol>
    );
}

export default MessageList;
