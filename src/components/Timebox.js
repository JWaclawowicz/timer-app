import React from "react";
import PropTypes from "prop-types";

function Timebox({ title, totalTimeInMinutes, onDelete, onEdit }) {
    return (
        <div className="Timebox">
            <h3>{title} - {totalTimeInMinutes} min.</h3>
            <button onClick={onDelete} >Usuń</button>
            <button onClick={onEdit}>Zmień</button>
        </div>
    )
}
Timebox.propTypes ={
    title: PropTypes.string.isRequired,
    totalTimeInMinutes: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default Timebox;