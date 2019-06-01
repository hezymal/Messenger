import React from "react";
import "./MessengerTitle.css";

function MessengerTitle(props) {
    const { children } = props;
    
    return (
        <div className="MessengerTitle">
            {children}
        </div>
    );
}

export default MessengerTitle;
