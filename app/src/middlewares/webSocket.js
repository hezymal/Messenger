import * as actionTypes from "../constants/actionTypes";
import { 
    opened as connectionOpened, 
    closed as connectionClosed 
} from "../actionCreators/connection";
import { receive as receiveMessage } from "../actionCreators/messages";

export function createMiddleware(webSocket) {
    webSocket.onerror = (error) => {
        console.log("Ошибка " + error.message);
    };

    return store => {
        webSocket.onopen = () =>
            store.dispatch(connectionOpened());
    
        webSocket.onclose = (event) => {
            if (!event.wasClean) {
                console.log('Обрыв соединения');
                console.log('Код: ' + event.code + ' причина: ' + event.reason);
            }

            store.dispatch(connectionClosed());
        };

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
