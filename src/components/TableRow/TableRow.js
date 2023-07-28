import './TableRow.css';
import bin from '../../images/bin.png';
import humanizeCategory from '../../helperFunctions';

const TableRow = ({savedTask, deleteTask, handleChange}) => {
    
  const change = () => {
    handleChange(savedTask)
  }

  const renderRow = () => {
    return (
      <tr className={savedTask.completed ? 'done' : ''} >
        <td>{humanizeCategory(savedTask.category)}</td>
        <td>{savedTask.task}</td>
        <td className='center-clm'><button onClick={change} className={savedTask.completed ? 'check-task checked' : 'check-task' }/></td>
        <td className='center-clm'><button onClick={() => deleteTask(savedTask.id)} className='trash'><img alt='trash bin' src={bin} className='bin'/></button></td>
    </tr>
    )
  }

  return (
    <>{renderRow()}</>
  )
}

export default TableRow

