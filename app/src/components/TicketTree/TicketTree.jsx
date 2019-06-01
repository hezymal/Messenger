import React from "react";
import TicketGroup from "./TicketGroup";
import "./TicketTree.css";

function TicketTree(props) {
    const { tickets, onClickTicket } = props;

    return (
        <div className="TicketTree">
            <TicketGroup 
                rootTicketId={null}
                tickets={tickets} 
                onClickTicket={onClickTicket} 
            />
        </div>
    );
}

export default TicketTree;
