import React from "react";
import classNames from "classnames";

function TimeboxEditor(props) {
    const { 
        title, 
        totalTimeInMinutes,
        isEditable,
        onTitleChange,
        onTotalTimeInMinutesChange,
        onConfirm
    } = props;
    let timeboxEditorClassName = classNames(
        "TimeboxEditor",
        {
            "inactive": !isEditable
        }
    );
    return (
        <div className={timeboxEditorClassName}>
            <label>
                Co robisz?
                <input 
                    disabled={!isEditable} 
                    value={title}
                    onChange={onTitleChange} 
                    type="text" 
                />
            </label><br/>
            <label>
                Ile minut?
                <input 
                    disabled={!isEditable} 
                    value={totalTimeInMinutes}
                    onChange={onTotalTimeInMinutesChange} 
                    type="number" 
                />
            </label><br />
            <button 
                onClick={onConfirm}
                disabled={!isEditable}
            >Zatwierdź zmiany</button>
        </div>
    )
}

export default TimeboxEditor;