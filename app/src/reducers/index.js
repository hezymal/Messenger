import { combineReducers } from "redux";
import connection from "./connection";
import messages from "./messages";

export default combineReducers({
    connection,
    messages
});
