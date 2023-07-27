async function fetchAllTasks() {
  const response = await fetch('http://localhost:3001/api/v1/tasks')
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}

async function fetchCategoryTask(category) {
  const response = await fetch(`http://localhost:3001/api/v1/tasks/${category}`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}

async function fetchSavedTasks() {
  const response = await fetch(`http://localhost:3001/api/v1/savedtasks`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}

async function postSavedTask(task) {
  const response = await fetch(`http://localhost:3001/api/v1/savedtasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  console.log(data)
  return data
}

async function patchTask(id, updatedCompletedStatus) {
  const response = await fetch(`http://localhost:3001/api/v1/savedtasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed: updatedCompletedStatus })
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}

async function deleteSavedTask(id) {
  const response = await fetch(`http://localhost:3001/api/v1/savedtasks/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}

export {
  fetchAllTasks,
  fetchCategoryTask,
  fetchSavedTasks,
  postSavedTask,
  patchTask,
  deleteSavedTask
}