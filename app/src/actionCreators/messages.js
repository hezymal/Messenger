import uuidv1 from "uuid/v1";
import * as actionTypes from "../constants/actionTypes";

export const push = text => ({
    type: actionTypes.PUSH_MESSAGE,
    payload: { 
        id: uuidv1(),
        createdDate: new Date(),
        text,
    },
});

export const receive = message => ({
    type: actionTypes.RECEIVE_MESSAGE,
    payload: message,
});
