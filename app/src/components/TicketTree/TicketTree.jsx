import React from "react";
import handleContextMenu from "decorators/handleContextMenu";
import TicketGroup from "./TicketGroup";
import "./TicketTree.css";

function TicketTree(props) {
    const { tickets, onClickTicket, onContextMenu } = props;

    return (
        <div className="TicketTree" onContextMenu={onContextMenu}>
            <TicketGroup 
                rootTicketId={null}
                tickets={tickets} 
                onClickTicket={onClickTicket} 
            />
        </div>
    );
}

TicketTree.contextMenu = {
    relativeKind: "cursor",
    options: [
        { key: "add", title: "Add Ticket", icon: "plus-circle" },
        { key: "remove", title: "Remove Ticket", icon: "times-circle" },
    ],
};

export default handleContextMenu(TicketTree);
