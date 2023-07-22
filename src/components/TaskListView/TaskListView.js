import './TaskListView.css'
import { useState } from 'react'
import TableRow from '../TableRow/TableRow'

const TaskListView = ({ savedTasks, setSavedTasks}) => {

  const deleteTask = (id) => {
    const allOtherTasks = savedTasks.filter(saved => saved.id !== id)
    setSavedTasks(allOtherTasks)
  }

  const rows = savedTasks.sort((a, b) => b.id - a.id).map((savedTask, index) => {
    return (<TableRow savedTask={savedTask} key={`row-${index}`} deleteTask={deleteTask} savedTasks={savedTasks} setSavedTasks={setSavedTasks} />)
  }) 

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Task</th>
          <th className='complete-header'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {savedTasks.length ? rows : <tr className='no-tasks'>Save a task to view it here!</tr>}
      </tbody>
    </table>
  )
}

export default TaskListView