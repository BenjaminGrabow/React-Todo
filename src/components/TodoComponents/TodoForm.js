import React from 'react';
import "./Todo.css"

const TodoForm = props => {
        return (
                <div className="add">
                        <input value={props.input} onChange={props.handleUserInput}></input>
                        <button onClick={props.handleTheAddedItem}>Add Todo</button>
                        <button onClick={props.handleClearButton}>Clear completed</button>
                </div>
        )
};

export default TodoForm; 