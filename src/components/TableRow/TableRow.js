import React from 'react'
import { useState } from 'react'

const TableRow = ({saved}) => {

    const [complete, setComplete] = useState(false)

    const handleChange = () => {
        setComplete(!complete)
    }

  return (
    <tr className={complete ? 'done' : ''} id={saved.id}>
        <td>{saved.category}</td>
        <td>{saved.task}</td>
        <td><button onClick={handleChange} className={complete ? 'check-task active' : 'check-task' }/></td>
        <td>🗑</td>
    </tr>
  )
}

export default TableRow

