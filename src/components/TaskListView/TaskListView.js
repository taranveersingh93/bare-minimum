

function TaskListView(props) {
  let filterSaved = props.savedData.map((saved) => {
    return (
      <tr>
        <td>{saved.category}</td>
        <td>{saved.task}</td>
        <td><input type="checkbox" /></td>
        <td>🗑</td>
      </tr>
    )
  })
  return (
    <table>
      <tr>
        <th>Category</th>
        <th>Task</th>
        <th>Complete?</th>
        <th>Delete</th>
      </tr>
      {filterSaved}
    </table>
  )
}

export default TaskListView