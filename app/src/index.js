import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createMiddleware as createWebSocketMiddleware } from "middlewares/webSocket";
import reducers from "reducers";
import App from "components/App";
import * as serviceWorker from "utils/serviceWorker";
import "index.css";

const webSocket = new WebSocket("ws://localhost:4000/ws");
const webSocketMiddleware = createWebSocketMiddleware(webSocket);
const store = createStore(reducers, applyMiddleware(webSocketMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
