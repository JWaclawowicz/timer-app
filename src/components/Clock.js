import React from "react";
import classNames from "classnames";

function Clock({ className = "", minutes = 20, seconds = 48 }) {
    let clockClassName = classNames(
        "Clock",
        className
    )
    return <h2 className={clockClassName}>Pozostało {minutes}:{seconds}</h2>
}

export default Clock;