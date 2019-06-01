import * as actionTypes from "../constants/actionTypes";

export const opened = () => ({
    type: actionTypes.CONNECTION_OPENED
});

export const closed = () => ({
    type: actionTypes.CONNECTION_CLOSED
});
