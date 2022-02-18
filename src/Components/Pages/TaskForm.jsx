import React, { useState } from 'react'

function TaskForm(props) {
    
    const [ input, setInput ] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('')

    }

    return (
    <form action="" onSubmit={ handleSubmit }>
        <input type="text"
        placeholder='Add a Task'
        value={input}
        name='text'
        onChange={ handleChange }
        />

        <button>Add Task</button>
    </form>
  )
}

export default TaskForm