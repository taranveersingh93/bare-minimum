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

async function postTask(task) {
  const response = await fetch(`http://localhost:3001/api/v1/savedtasks`)
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
  postTask
}