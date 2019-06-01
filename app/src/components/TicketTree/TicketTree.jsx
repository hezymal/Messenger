import React from "react";
import "./TicketTree.css";

function TicketGroup(props) {
    const { rootTicketId, tickets, onClickTicket } = props;

    return (
        <ol className="TicketTree__Group">
            {tickets.filter(ticket => ticket.parentId === rootTicketId).map(ticket => {
                const existSubTickets = tickets.some(t => t.parentId === ticket.id);

                return (
                    <li 
                        key={ticket.id} 
                        className="TicketTree__Ticket" 
                        onClick={() => onClickTicket(ticket)}
                    >
                        <button 
                            type="button"
                            className="TicketTree__Cloud"
                        >
                            {ticket.title}
                        </button>
                        {existSubTickets && (
                            <div className="TicketTree__SubTickets">
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
