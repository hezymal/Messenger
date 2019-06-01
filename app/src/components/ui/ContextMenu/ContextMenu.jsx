import React from "react";
import "./ContextMenu.css";

function getCursorClassName(cursorDirection) {
    let className = "fa fa-caret-left ContextMenu__Cursor";

    switch (cursorDirection) {
        case "top-left":
            className += " ContextMenu__Cursor_TopLeft";
            break;

        default:
            className += " ContextMenu__Cursor_Left";
            break;
    }

    return className;
}

function ContextMenu(props) {
    const { options, onClickOption, cursorDirection } = props;
    const finalCursorClassName = getCursorClassName(cursorDirection);

    return (
        <div className="ContextMenu">
            <i className={finalCursorClassName} />
            <ol className="ContextMenu__List">
                {options.map(option =>
                    <li 
                        className="ContextMenu__Option"
                        key={option.key} 
                        onClick={() => onClickOption(option)}
                    >
                        {option.icon && (
                            <i className={"fa fa-" + option.icon} />
                        )}
                        {option.title}
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ContextMenu;
