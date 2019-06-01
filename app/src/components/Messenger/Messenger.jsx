import React from "react";
import MessengerTitle from "./MessengerTitle";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "./Messenger.css";

function Messenger(props) {
    const { messages, pushMessage } = props;

    return (
        <div className="Messenger">
            <MessengerTitle>Messenger</MessengerTitle>
            <MessageList messages={messages} />
            <MessageInput onSubmit={pushMessage} />
        </div>
    );
}

export default Messenger;
