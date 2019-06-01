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
            const { contextMenuOptions, onClickContextMenuOption, ...tail } = this.props;
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
                                options={contextMenuOptions} 
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

        toggle = command => {
            const visible = command === "show";

            if (visible === this.state.visible) {
                return;
            }

            this.setState({ visible });
        };
        
        handleContextMenu = event => {
            const { currentTarget } = event;

            event.preventDefault();
            
            this.setPosition({ 
                left: currentTarget.offsetLeft + currentTarget.offsetWidth + 6, 
                top: currentTarget.offsetTop 
            });
            this.toggle("show");
        };
        
        handleClickWindow = () => this.toggle("hide");
    };

export default handleContextMenu;
