import React from 'react'
import { useState } from 'react'

const TableRow = ({saved, index}) => {

    const [complete, setComplete] = useState(false)

    const handleChange = () => {
        setComplete(!complete)
    }

  return (
    <tr className={complete ? 'done' : ''} id={saved.id} key={`row-${index}`}>
        <td>{saved.category}</td>
        <td>{saved.task}</td>
        <td><button onClick={handleChange} className='check-task'/></td>
        <td>🗑</td>
    </tr>
  )
}

export default TableRow

