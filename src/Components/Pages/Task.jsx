import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Task({tasks, completeTask, removeTask}) {

    const [ edit, setEdit ] = useState({
        id: null,
        value: ''
    })


    
    return tasks.map((task, index ) => (
        <div className={task.isComplete ? 'task-row complete' : 'task-row'}
        key={index}>
            <div key={task.id} onClick={() =>
            completeTask(task.id)}>

                {task.text}
            </div>
            <div className='icon'>
                <RiCloseCircleLine 
                onClick={() => removeTask(task.id)}
                className='delete-icon'/>
                <TiEdit 
                onClick={() => setEdit({ id: todo.id, value: todo.text})}
                className='edit-icon'
                />
            </div>
        </div>
    ))
}

export default Task
