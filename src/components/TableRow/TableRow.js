import React from 'react'
import { useState } from 'react'
import './TableRow.css'
import bin from '../../images/bin.png'

const TableRow = ({savedTask, deleteTask, savedTasks, setSavedTasks}) => {

    const handleChange = () => {
        const allOtherTasks = savedTasks.filter(saved => saved.id !== savedTask.id)
        const updatedTask = {...savedTask}
        updatedTask.complete = !updatedTask.complete
        const updatedTasks = [...allOtherTasks, updatedTask]
        setSavedTasks(updatedTasks)
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

