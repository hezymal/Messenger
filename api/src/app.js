const express = require("express");
const expressWS = require("express-ws");
const WebSocket = require("ws");
const asyncMiddleware = require("./utils/asyncMiddleware");
const homeRoute = require("./routes/home");

const config = {
    port: 4000,
};

const app = express();
const wsInstance = expressWS(app);

app.get("/", asyncMiddleware(homeRoute));

app.ws("/ws", (ws, req) => {
    ws.on('message', message => {
        console.log(message);
        const wss = wsInstance.getWss();

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

app.listen(config.port, () => 
    console.log(`Messenger listening on port ${config.port}!`)
);
