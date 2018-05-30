import React from 'react';

const TodoItem=(props)=>{
    return(
        <li>
        <p contentEditable="true" onClick={(event)=>{
           
            props.clickHandler(props.index);
             event.stopPropagation();
        }} className={props.detail.completed ? 'completed' : ''}>
        {props.detail.name}</p>
        <button onClick={(evt)=>{
            props.deleteTask(props.index);
            evt.stopPropagation();
        }}>Delete Task</button>
       
        </li>
    )
};
export default TodoItem;