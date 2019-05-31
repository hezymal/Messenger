import * as actionTypes from "../constants/actionTypes";

const initialState = [];

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.PUSH_MESSAGE: {
            const message = action.payload;
            
            return [
                ...state,
                { ...message, isReceived: false },
            ];
        }

        case actionTypes.RECEIVE_MESSAGE: {
            const message = action.payload;
            
            return [
                ...state,
                { ...message, isReceived: true },
            ];
        }

        default:
            return state;
    }
}

export default reducer;
