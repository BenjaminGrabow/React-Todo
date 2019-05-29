import React from 'react';

const TodoForm = props => {
        return (
                <div>
                        <input value={props.input} onChange={props.handleUserInput}></input>
                        <button onClick={props.handleTheAddedItem}>Add Todo</button>
                        <button onClick={props.handleClearButton}>Clear completed</button>
                </div>
        )
};

export default TodoForm; 