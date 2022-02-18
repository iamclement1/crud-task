import { useState } from 'react'
import TaskList from './Components/Pages/TaskList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TaskList/>
    </div>
  )
}

export default App
