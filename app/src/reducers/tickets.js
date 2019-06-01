import * as actionTypes from "../constants/actionTypes";

const initialState = [
    { id: 1, title: "Basic Group", parentId: null },
    { id: 2, title: "Ticket Project", parentId: null },
    { id: 3, title: "Messenger Project", parentId: null },
    { id: 4, title: "Messenger Project", parentId: 1 },
    { id: 5, title: "Messenger Project", parentId: 1 },
    { id: 6, title: "Messenger Project", parentId: 1 },
    { id: 7, title: "Messenger Project", parentId: 1 },
    { id: 8, title: "Messenger Project", parentId: null },
    { id: 9, title: "Messenger Project", parentId: null },
    { id: 10, title: "Messenger Project 10", parentId: 4 },
    { id: 11, title: "Messenger Project 11", parentId: 4 },
    { id: 12, title: "Messenger Project 12", parentId: 4 },
    { id: 13, title: "Messenger Project 13", parentId: 4 },
];

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;
