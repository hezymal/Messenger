import { connect } from "react-redux";
import TicketTree from "components/TicketTree";

function mapStateToProps(state) {
    return {
        tickets: state.tickets,
        onClickTicket: () => {},
    };
}

export default connect(mapStateToProps)(TicketTree);
