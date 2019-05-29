import React from 'react';
import "./Todo.css";

const Todo = props => {
        return (
                <li
                        className={props.listClass}
                        onClick={props.changeToFinished}
                >{props.children}</li>
        )
}

export default Todo;