import React from "react";
import TicketCloud from "../TicketCloud";
import "./TicketGroup.css";

function TicketGroup(props) {
    const { rootTicketId, tickets, onClickTicket } = props;

    return (
        <ol className="TicketGroup">
            {tickets.filter(ticket => ticket.parentId === rootTicketId).map(ticket => {
                const existSubTickets = tickets.some(t => t.parentId === ticket.id);

                return (
                    <li 
                        key={ticket.id} 
                        className="TicketGroup__Ticket" 
                        onClick={() => onClickTicket(ticket)}
                    >
                        <TicketCloud
                            title={ticket.title}
                            onClickContextMenuOption={console.log.bind(console)}
                        />
                        {existSubTickets && (
                            <div className="TicketGroup__SubTickets">
                                <TicketGroup
                                    rootTicketId={ticket.id}
                                    tickets={tickets}
                                    onClickTicket={onClickTicket} 
                                />
                            </div>
                        )}
                    </li>
                );
            })}
        </ol>
    );
}

export default TicketGroup;
