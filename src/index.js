import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './component/TodoItem.js';
import TodoForm from './component/TodoForm.js';
class ToDoList extends React.Component{
   constructor(){
       super();
       this.changeStatus=this.changeStatus.bind(this);
       this.updateStatus=this.updateStatus.bind(this);
       this.addTask=this.addTask.bind(this);
       this.deleteTask=this.deleteTask.bind(this);
       
    this.state={
        tasks:[
          
        ],
        currentTask:'',
    }

   }
     
   localStore(){
    
    localStorage.setItem('todoList',JSON.stringify(this.state));
}
addTask(e){
    
    e.preventDefault();
    e.stopPropagation();
    let tasks=this.state.tasks;
    let currentTask=this.state.currentTask;
    tasks.push({
        name:currentTask,
        completed:false,
    })
    this.setState({
        tasks:tasks
    })
    this.localStore();
}
deleteTask(index){
   
var tasks=this.state.tasks;
tasks.splice(index,1);

this.setState({
    tasks:tasks
})
this.localStore();
}
updateStatus(e){
    this.setState({
        currentTask:e.target.value,
    })
}
changeStatus(index){
    
var tasks=this.state.tasks;
var task=tasks[index];
task.completed=!task.completed;
this.setState({
    tasks:tasks
})
}

render(){
    return(
        <div>
        <ul> 
            <TodoForm  currentTask={this.state.currentTask}
            updateStatus={this.updateStatus}
            addTask={this.addTask}/>      
            {this.state.tasks.map((task,index)=>{
                return  <TodoItem key={index} index={index} deleteTask={this.deleteTask} clickHandler={this.changeStatus} detail={task} />
            })}
             
        </ul>
        </div>
    );
}
}

ReactDOM.render(<ToDoList/>,document.getElementById('root'));