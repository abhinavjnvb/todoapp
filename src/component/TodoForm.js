import React from 'react';

const TodoForm=(props)=>{
    return(
    <form onSubmit={props.addTask} className='fstyle'>
    <input type="text" placeholder="Enter Task" value={props.currentTask} onChange={props.updateStatus} required />
    <button type="submit" >Add Task</button>
    
    </form>

    )
}
export default TodoForm ;