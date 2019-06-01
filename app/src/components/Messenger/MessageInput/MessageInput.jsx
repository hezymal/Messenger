import React from "react";
import "./MessageInput.css";

class MessageInput extends React.PureComponent {
    state = {
        value: "",
    };

    render() {
        const { value } = this.state;

        return (
            <form className="MessageInput" onSubmit={this.handleSubmit}>
                <input 
                    className="MessageInput__Input"
                    value={value} 
                    onChange={this.handleChangeValue}
                    placeholder="This place for typing..."
                />
                <button className="MessageInput__Button">Submit</button>
            </form>
        );
    }

    handleChangeValue = e => {
        const newValue = e.currentTarget.value;

        this.setState({ value: newValue });
    };

    handleSubmit = e => {
        const value = this.state.value.trim();

        e.preventDefault();

        if (value) {
            this.setState({ value: "" });
            this.props.onSubmit(value);
        }
    };
}

export default MessageInput;
