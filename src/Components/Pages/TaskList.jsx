import React, { useState } from 'react'
import Task from './Task';
import TaskForm from './TaskForm'

function TaskList() {

    const [ tasks, setTasks ] = useState([]);

    const addTask = task =>{
        if(!task.text || /^\s*$/.test(task.text )) {
            return
        }

        const newTasks = [task, ...tasks]

        setTasks(newTasks);
    }



    // this function adds a task to the task list
    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if(task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        })
        setTasks(updatedTasks)
    }
    
    return (
    <div className=''>
        <h1 className='font-bold text-3xl'>What is the Plan for Today?</h1>
        <TaskForm onSubmit={addTask}/>
        <Task tasks={tasks} completeTask={completeTask}/>
    </div>
  )
}

export default TaskList
