import React from 'react'
import { useState } from 'react'
import bin from './bin.png'

const TableRow = ({saved, deleteTask}) => {

    const [complete, setComplete] = useState(false)

    const handleChange = () => {
        setComplete(!complete)
    }

    
  return (
    <tr className={complete ? 'done' : ''} >
        <td>{saved.category}</td>
        <td>{saved.task}</td>
        <td className='center-clm'><button onClick={handleChange} className={complete ? 'check-task checked' : 'check-task' }/></td>
        <td className='center-clm'><button onClick={() => deleteTask(saved.id)} className='trash bin'><img src={bin} className='bin'/></button></td>
    </tr>
  )
}

export default TableRow

