import React from 'react'
import { useState } from 'react'
import './TableRow.css'
import bin from '../../images/bin.png'

const TableRow = ({savedTask, deleteTask, savedTasks, setSavedTasks}) => {

    // const [complete, setComplete] = useState(false)


    const handleChange = () => {
        savedTask.complete = setSavedTasks(...savedTasks, )
    }
    
  return (
    <tr className={savedTask.complete ? 'done' : ''} >
        <td>{savedTask.category}</td>
        <td>{savedTask.task}</td>
        <td className='center-clm'><button onClick={handleChange} className={savedTask.complete ? 'check-task checked' : 'check-task' }/></td>
        <td className='center-clm'><button onClick={() => deleteTask(savedTask.id)} className='trash'><img src={bin} className='bin'/></button></td>
    </tr>
  )
}

export default TableRow

