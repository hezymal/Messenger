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

TicketCloud.contextMenu = {
    options: [
        { key: "add", title: "Add Sub Ticket", icon: "plus-circle" },
        { key: "remove", title: "Remove Sub Ticket", icon: "times-circle" },
    ]
};

export default handleContextMenu(TicketCloud);
