import { combineReducers } from "redux";
import connection from "./connection";
import messages from "./messages";
import tickets from "./tickets";

export default combineReducers({
    connection,
    messages,
    tickets
});
