import React from "react";
import MessageList from "../MessageList";
import MessageInput from "../MessageInput";
import "./Messenger.css";

function Messenger(props) {
    const { messages, pushMessage } = props;

    return (
        <div className="Messenger">
            <MessageList messages={messages} />
            <MessageInput onSubmit={pushMessage} />
        </div>
    );
}

export default Messenger;
