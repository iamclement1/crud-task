import React, { useState } from 'react'
import Task from './Task';
import TaskForm from './TaskForm'

function TaskList() {

    const [ tasks, setTasks ] = useState([]);

    const addTask = task =>{
        if(!task.text || /^\s*$/.test(task.text )) {
            return;
        }

        const newTasks = [task, ...tasks]
        setTasks(newTasks);
    };

    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text )) {
            return;
        }

        setTasks (prev => prev.map(item => (item.id === taskId ? newValue : item))
        
        )
    }

    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)

        setTasks(removeArr);
    };


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
    <div className='text-center bg-gray-900 text-white'>
        <h1 className='font-bold text-3xl'>What is the Plan for Today?</h1>
        <TaskForm onSubmit={addTask}/>
        <Task tasks={tasks} completeTask={completeTask} 
        removeTask = { removeTask }
        updateTask = { updateTask }
        />
    </div>
  )
}

export default TaskList
