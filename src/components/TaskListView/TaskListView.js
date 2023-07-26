import './TaskListView.css'
import TableRow from '../TableRow/TableRow'
import { deleteSavedTask } from '../apiCalls'
import { useEffect } from 'react'

const TaskListView = ({savedTasks, setSavedTasks}) => {

  // useEffect(() => {

  // }, [savedTasks])

  const deleteTask = (id) => {
    deleteSavedTask(id).then(newSaved => {
      setSavedTasks(newSaved)
    })
  }

  const handleChange = (savedTask) => {
    const allOtherTasks = savedTasks.filter(saved => saved.id !== savedTask.id)
    const updatedTask = {...savedTask}
    updatedTask.complete = !updatedTask.complete
    const updatedTasks = [...allOtherTasks, updatedTask]
    setSavedTasks(updatedTasks)
  }

  const rows = () => savedTasks.sort((a,b) => b.id - a.id).map((savedTask, index) => {
    return (<TableRow savedTask={savedTask} key={`row-${index}`} deleteTask={deleteTask} handleChange={handleChange}/>)
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
        {savedTasks.length ? rows() : <tr className='no-tasks'><td>Save a task to view it here!</td></tr>}
      </tbody>
    </table>
  )
}

export default TaskListView