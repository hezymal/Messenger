import React from "react";
import Message from "./Message";
import "./MessageList.css";

class MessageList extends React.PureComponent {
    scrollPoint = React.createRef();

    componentDidUpdate() {
        this.scrollPoint.current && this.scrollToElement(this.scrollPoint.current);
    }

    render() {
        const { messages } = this.props;

        return (
            <ol className="MessageList">
                {messages.map(message =>
                    <Message 
                        key={message.id}
                        createdDate={message.createdDate}
                        isReceived={message.isReceived}
                    >
                        {message.text}
                    </Message>
                )}
                <li ref={this.scrollPoint} />
            </ol>
        );
    }

    scrollToElement = (element) =>
        element.scrollIntoView({ 
            block: "start", 
            behavior: "auto" 
        });
}

export default MessageList;
