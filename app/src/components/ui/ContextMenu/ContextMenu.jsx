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

function Option(props) {
    const { option, onClickOption } = props;

    return (
        <li 
            className="ContextMenu__Option"
            onClick={() => onClickOption(option.key)}
        >
            {option.icon && <i className={"fa fa-" + option.icon} />}
            {option.title}
        </li>
    );
}

function ContextMenu(props) {
    const { options, onClickOption, cursorDirection } = props;
    const finalCursorClassName = getCursorClassName(cursorDirection);

    return (
        <div className="ContextMenu">
            <i className={finalCursorClassName} />
            <ol className="ContextMenu__List">
                {options.map((option, index) =>
                    typeof option === "string"
                        ? <hr key={index} className="ContextMenu__Divider" />
                        : <Option 
                            key={index} 
                            option={option} 
                            onClickOption={onClickOption} 
                        />
                )}
            </ol>
        </div>
    );
}

export default ContextMenu;
