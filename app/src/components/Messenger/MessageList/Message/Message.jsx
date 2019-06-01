import React from "react";
import { distanceInWords } from "date-fns"
import "./Message.css";

function Message(props) {
    const { children, isReceived, createdDate } = props;
    const finalClassName = "Message " + (isReceived ? "Message_Received" : "Message_Sent");
    
    return (
        <li className={finalClassName}>
            <div className="Message__Cloud">
                <header className="Message__Header">
                    {distanceInWords(createdDate, new Date())}
                </header>
                {children}
            </div>
        </li>
    );
}

export default Message;
