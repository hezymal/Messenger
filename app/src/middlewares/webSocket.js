import * as actionTypes from "../constants/actionTypes";
import { receive as receiveMessage } from "../actionCreators/messages";

export function createMiddleware(webSocket) {
    webSocket.onopen = () => {
        console.log("WS:opened");
    };

    webSocket.onclose = (event) => {
        if (!event.wasClean) {
            console.log('Обрыв соединения');
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        }

        console.log("WS:closed");
    };

    webSocket.onerror = (error) => {
        console.log("Ошибка " + error.message);
    };

    return store => {
        webSocket.onmessage = (event) => {
            const receivedMessage = JSON.parse(event.data);
            store.dispatch(receiveMessage(receivedMessage));
        };

        return next => action => {
            // eslint-disable-next-line
            switch (action.type) {
                case actionTypes.PUSH_MESSAGE: {
                    const newMessage = JSON.stringify(action.payload);
                    webSocket.send(newMessage);
                    break;
                }
            }

            next(action);
        };
    };
}
