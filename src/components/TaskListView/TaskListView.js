import './TaskListView.css'
import { useState } from 'react'
import TableRow from '../TableRow/TableRow'


const TaskListView = (props) => {

  const [tasks, setTasks] = useState(props.savedData)

  const deleteTask = (id) => {
    const allOtherTasks = tasks.filter(saved => saved.id !== id)
    setTasks(allOtherTasks)
  }

  const rows = tasks.map((saved, index) => {
    return (<TableRow saved={saved} key={`row-${index}`} deleteTask={deleteTask} />)
  }) 

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Task</th>
          <th className='complete-header'>Complete</th>
        </tr>
      </thead>
      <tbody>
        {!!tasks.length ? rows : <tr className='no-tasks'>Save a task to view it here!</tr>}
      </tbody>
    </table>
  )
}

export default TaskListView