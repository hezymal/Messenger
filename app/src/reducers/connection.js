import * as actionTypes from "../constants/actionTypes";

const initialState = {
    opened: false,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CONNECTION_OPENED:
            return {
                ...state,
                opened: true,
            };

        case actionTypes.CONNECTION_CLOSED:
            return {
                ...state,
                opened: false,
            };

        default:
            return state;
    }
}

export default reducer;
