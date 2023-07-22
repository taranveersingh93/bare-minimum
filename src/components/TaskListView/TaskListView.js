import './TaskListView.css'
import { useState } from 'react'
import TableRow from '../TableRow/TableRow'


const TaskListView = (props) => {

  const [] = useState()

  const deleteTask = (id) => {
    const foundTask = props.savedData.filter(saved => saved.id === id)
    const foundTaski = props.savedData.indexOf(foundTask)
    props.savedData.splice(foundTaski, 1)
    return props.savedData
  }

  const task = props.savedData.map((saved, index) => {
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
        {task}
      </tbody>
    </table>
  )
}

export default TaskListView