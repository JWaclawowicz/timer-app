import React from "react";
import uuid from "uuid";

class TimeboxCreator extends React.Component {
    constructor(props) {
        super(props);
        this.titleInput = React.createRef();
        this.totalTimeInMinutesInput = React.createRef();
    }
    handleSubmit = (event) => {
        event.preventDefault(); 
        this.props.onCreate({ 
            id: uuid.v4(), 
            title: this.titleInput.current.value, 
            totalTimeInMinutes: this.totalTimeInMinutesInput.current.value
        });
        this.titleInput.current.value = "";
        this.totalTimeInMinutesInput.current.value = "";
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="TimeboxCreator">
                <label>
                    Co robisz?
                    <input 
                        ref={this.titleInput}
                        type="text" 
                    />
                </label><br/>
                <label>
                    Ile minut?
                    <input 
                        ref={this.totalTimeInMinutesInput}
                        type="number" 
                    />
                </label><br />
                <button 
                >Dodaj timebox</button>
            </form>
        )
    }
}
class TimeboxList extends React.Component {
    state = {
        timeboxes: [
            { id: "a", title: "Uczę się CSS in JS", totalTimeInMinutes: 25 },
            { id: "b", title: "Uczę się SASS", totalTimeInMinutes: 15 },
            { id: "c", title: "Uczę się BEM", totalTimeInMinutes: 5 },
        ]
    }

    addTimebox = (timebox) => {
        this.setState(prevState => {
            const timeboxes = [timebox, ...prevState.timeboxes];
            return { timeboxes };
        })
    }
    removeTimebox = (indexToRemove) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToRemove);
            return { timeboxes };
        })
    }
    updateTimebox = (indexToUpdate, updatedTimebox) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((timebox, index) =>
                index === indexToUpdate ? updatedTimebox : timebox
            )
            return { timeboxes };
        })
    }

    handleCreate = (createdTimebox) => {
        this.addTimebox(createdTimebox);
    }
    render() {
        return (
            <>
                <TimeboxCreator onCreate={this.handleCreate} />
                {this.state.timeboxes.map((timebox, index) => (
                    <Timebox 
                        key={timebox.id} 
                        title={timebox.title} 
                        totalTimeInMinutes={timebox.totalTimeInMinutes}
                        onDelete={() => this.removeTimebox(index)}
                        onEdit={() => this.updateTimebox(index, {...timebox, title: "Updated timebox"})}
                    />
                ))}
            </>
        )
    }
}
function Timebox({ title, totalTimeInMinutes, onDelete, onEdit }) {
    return (
        <div className="Timebox">
            <h3>{title} - {totalTimeInMinutes} min.</h3>
            <button onClick={onDelete} >Usuń</button>
            <button onClick={onEdit}>Zmień</button>
        </div>
    )
}

export { TimeboxList };