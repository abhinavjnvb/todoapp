import React from 'react';

const TodoItem=(props)=>{
    return(
        <div className="itemContainer">
            <form>
        <input  type="checkbox"  onClick={(event)=>{
           
            props.clickHandler(props.index);
             event.stopPropagation();
        }}  /></form>
       <p  id="itemPara" contentEditable="true" suppressContentEditableWarning={true} className={props.detail.completed ? 'completed' : ''} > {props.detail.name}</p>
        
        <button   onClick={(evt)=>{
            props.deleteTask(props.index);
            evt.stopPropagation();
        }}><i className="fas fa-trash-alt"></i></button>
       
        </div>
    )
};
export default TodoItem;