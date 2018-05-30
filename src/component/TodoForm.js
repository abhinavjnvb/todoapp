import React from 'react';

const TodoForm=(props)=>{
    return(
    <form onSubmit={props.addTask} className='fstyle'>
    <input type="text" placeholder="Enter Task" value={props.currentTask} onChange={props.updateStatus} required />
    <button id="formButton" type="submit" ><i className="fas fa-plus-square"></i></button>
    
    </form>

    )
}
export default TodoForm ;