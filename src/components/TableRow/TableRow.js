import { useEffect } from 'react'
import { useState } from 'react'
import './TableRow.css'
import bin from '../../images/bin.png'

const TableRow = ({savedTask, deleteTask, handleChange}) => {
    
  const change = () => {
    handleChange(savedTask)
  }

  const renderRow = () => {
    return (
      <tr className={savedTask.complete ? 'done' : ''} >
        <td>{savedTask.category}</td>
        <td>{savedTask.task}</td>
        <td className='center-clm'><button onClick={change} className={savedTask.complete ? 'check-task checked' : 'check-task' }/></td>
        <td className='center-clm'><button onClick={() => deleteTask(savedTask.id)} className='trash'><img src={bin} className='bin'/></button></td>
    </tr>
    )
  }

  return (
    <>{renderRow()}</>
  )
}

export default TableRow

