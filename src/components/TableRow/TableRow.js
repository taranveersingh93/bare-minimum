import React from 'react'
import { useState } from 'react'
import bin from './bin.png'

const TableRow = ({saved}) => {

    const [complete, setComplete] = useState(false)

    const handleChange = () => {
        setComplete(!complete)
    }

  return (
    <tr className={complete ? 'done' : ''} id={saved.id}>
        <td>{saved.category}</td>
        <td>{saved.task}</td>
        <td className='center-clm'><button onClick={handleChange} className={complete ? 'check-task checked' : 'check-task' }/></td>
        <td className='center-clm'><button className='trash bin'><img src={bin} className='bin'/></button></td>
    </tr>
  )
}

export default TableRow

