import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function ProgressBar({ className = "", percent = 33, big = false, color = null }) {
    let progressClassName = classNames(
        "progress",
        className,
        {
            "progress--big": big,
            "progress--color-red": color === "red"
        }
    );
    return (
        <div className={progressClassName}>
            <div className="progress__bar" style={{width: `${percent}%`}}></div>
        </div>
    );
}
function numberType(props, propName, componentName) {
    if (typeof props[propName] !== "number") {
        return new Error(`Invalid prop '${propName}' supplied to component '${componentName}'. It has to be a number.`);
    }
}
function numberFrom0To100Type(props, propName, componentName) {
    if (props[propName] < 0 || props[propName] > 100) {
        return new Error(`Invalid prop '${propName}' supplied to component '${componentName}'. It has to be between 0 and 100.`);         
    }
    return numberType(props, propName, componentName);
}
ProgressBar.propTypes = {
    percent: numberFrom0To100Type,
    color: PropTypes.oneOf(['red', 'green', 'blue'])
}

export default ProgressBar;