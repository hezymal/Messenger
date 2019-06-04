import React from "react";
import wrapContextMenu from "decorators/wrapContextMenu";
import "./TicketCloud.css";

function Ticket(props) {
    const { title, onContextMenu } = props;

    return (
        <button 
            type="button"
            className="TicketCloud"
            onContextMenu={onContextMenu}
        >
            {title}
        </button>
    );
}

const TicketWithContextMenu = wrapContextMenu(Ticket, {
    options: [
        { key: "rename", title: "Rename", icon: "pen" },
        "-",
        { key: "add", title: "Add Sub Ticket", icon: "plus-circle" },
        { key: "remove", title: "Remove Sub Ticket", icon: "times-circle" },
    ]
});

class TicketCloud extends React.PureComponent {
    static getDerivedStateFromProps(state, props) {
        return {
            ...state,
            title: state.title || props.title,
        };
    }

    state = {
        title: "",
        renaming: false,
    };

    render() {
        return (
            <TicketWithContextMenu 
                {...this.props} 
                title={this.state.title}
                onClickContextMenuOption={this.handleClickContextMenuOption}
            />
        );
    }

    handleClickContextMenuOption = optionKey => {
        if (optionKey === "rename") {
            this.setState({ renaming: true });
        }

        this.props.onClickContextMenuOption(optionKey);
    };
}

export default TicketCloud;
