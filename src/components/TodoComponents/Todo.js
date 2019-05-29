import React from 'react';

const Todo = props => {
        return(
                <div
                className={props.listClass}
                >{props.children}</div>
        )
}

export default Todo;