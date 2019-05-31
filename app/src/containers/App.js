import { connect } from "react-redux";
import Messenger from "../components/Messenger";
import { push as pushMessage } from "../actionCreators/messages";

function mapStateToProps(state) {
    return {
        messages: state.messages,
    };
}

const actions = { pushMessage };

export default connect(mapStateToProps, actions)(Messenger);
