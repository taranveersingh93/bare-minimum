
async function fetchTasks() {
  const response = await fetch('http://localhost:3001/api/v1/tasks')
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}

async function fetchCatergoryTask(category) {
  const response = await fetch(`http://localhost:3001/api/v1/tasks/${category}`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data
}