import React from "react";
import Messenger from "containers/Messenger";
import TicketTree from "containers/TicketTree";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="App__LeftColumn">
                <TicketTree />
            </div>
            <div className="App__RightColumn">
                <Messenger />
            </div>
        </div>
    );
}

export default App;
