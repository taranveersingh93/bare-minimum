import './TaskListView.css'
import { useState } from 'react'


const TaskListView = (props) => {

    const [complete, setComplete] = useState(false)

    const handleChange = () => {
        console.log(complete)
        setComplete(!complete)
    }

  let filterSaved = props.savedData.map((saved, index) => {
    return (
      <tr className={complete ? 'done' : ''} key={`row-${index}`}>
        <td>{saved.category}</td>
        <td>{saved.task}</td>
        <td><button onChange={handleChange} className='check-task'/></td>
        <td>🗑</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
            <th>Category</th>
            <th>Task</th>
            <th>Complete?</th>
            <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {filterSaved}
      </tbody>
    </table>
  )
}

export default TaskListView