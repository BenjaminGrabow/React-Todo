import React from 'react';

const Todo = props => {
        return (
                <div
                        className={props.listClass}
                        onClick={props.changeToFinished}
                >{props.children}</div>
        )
}

export default Todo;