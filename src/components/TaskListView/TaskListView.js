import './TaskListView.css'
import TableRow from '../TableRow/TableRow'
import { deleteSavedTask } from '../apiCalls'

const TaskListView = ({savedTasks, setSavedTasks}) => {

  const deleteTask = (id) => {
    deleteSavedTask(id).then(newSaved => {
      setSavedTasks(newSaved)
    })
  }

  const rows = savedTasks.map((savedTask, index) => {
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