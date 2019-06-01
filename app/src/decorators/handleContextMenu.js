import React from "react";
import ContextMenu from "components/ui/ContextMenu";

const style = {
    position: "fixed"
};

const handleContextMenu = Component =>
    class ContextMenuHandler extends React.PureComponent {
        menu = React.createRef();

        state = {
            visible: false
        };

        componentDidMount() {
            window.addEventListener("mouseup", this.handleClickWindow);
        }

        render() {
            const { onClickContextMenuOption, ...tail } = this.props;
            const { visible } = this.state;

            return (
                <React.Fragment>
                    <Component
                        {...tail}
                        onContextMenu={this.handleContextMenu}
                    />
                    <div style={style} ref={this.menu}>
                        {visible && (
                            <ContextMenu 
                                options={Component.contextMenu.options} 
                                onClickOption={onClickContextMenuOption} 
                            />
                        )}
                    </div>
                </React.Fragment>
            );
        }

        setPosition = ({ left, top }) => {
            const menuElement = this.menu.current;

            if (!menuElement) {
                return;
            }

            menuElement.style.left = `${left}px`;
            menuElement.style.top = `${top}px`;
        };

        getPositionFromEvent = event => {
            switch (Component.contextMenu.relativeKind) {
                case "cursor":
                    return {
                        left: event.pageX + 6,
                        top: event.pageY - 18,
                    };

                default: {
                    const element = event.currentTarget;
                    return {
                        left: element.offsetLeft + element.offsetWidth + 6, 
                        top: element.offsetTop,
                    };
                }
            }
        };

        toggle = command => {
            const visible = command === "show";

            if (visible === this.state.visible) {
                return;
            }

            this.setState({ visible });
        };
        
        handleContextMenu = event => {
            event.preventDefault();
            event.stopPropagation();

            this.setPosition(this.getPositionFromEvent(event));
            this.toggle("show");
        };
        
        handleClickWindow = () => this.toggle("hide");
    };

export default handleContextMenu;
