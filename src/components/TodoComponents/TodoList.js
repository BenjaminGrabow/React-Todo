import React from "react";
import Todo from "./Todo";


const TodoList = props => {
        return (
                <ul>
                        {props.todoFromState.map(todoMapValue => (
                                <Todo
                                        key={todoMapValue.id}
                                        listClass={todoMapValue.completed}
                                        changeToFinished={props.handleFinish}
                                >{todoMapValue.task}</Todo>
                        ))}
                </ul>
        );
};

export default TodoList;
