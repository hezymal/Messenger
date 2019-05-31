import React from "react";
import "./Message.css";

function Message(props) {
    const { children, isReceived } = props;
    const finalClassName = "Message " + (isReceived ? "Message_Received" : "Message_Sent");
    
    return (
        <li className={finalClassName}>
            <div className="Message__Cloud">
                {children}
            </div>
        </li>
    );
}

export default Message;
