import React from "react";
import "./ContextMenu.css";

function ContextMenu(props) {
    const { options, onClickOption } = props;

    return (
        <div className="ContextMenu">
            <i className="fa fa-caret-left ContextMenu__Cursor" />
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
