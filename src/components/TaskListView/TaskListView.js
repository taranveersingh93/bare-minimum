

function TaskListView(props) {
  let filterSaved = props.savedData.map((saved) => {
    return (
      <section>
        <p>{saved.category}, {saved.task}</p>
      </section>
    )
  })

  return (
    <div>
      <h1>Tasks</h1>
      {filterSaved}
    </div>
  )
}

export default TaskListView