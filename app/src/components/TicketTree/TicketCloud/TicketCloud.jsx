import React from "react";
import handleContextMenu from "decorators/handleContextMenu";
import "./TicketCloud.css";

function TicketCloud(props) {
    const { title, onContextMenu } = props;

    return (
        <button 
            type="button"
            className="TicketCloud"
            onContextMenu={onContextMenu}
        >
            {title}
        </button>
    );
}

export default handleContextMenu(TicketCloud);
