import './App.css';
import Navbar from '../Navbar/Navbar';
import HomeView from '../HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';
import SelectTaskView from '../SelectTaskView/SelectTaskView';
import TaskListView from '../TaskListView/TaskListView'
import { useEffect, useState } from 'react';
import { fetchSavedTasks } from '../apiCalls';

const App = () => {
  const [savedTasks, setSavedTasks] = useState([])
  const [error, setError] = useState({ error: false, response: '' })

  useEffect(() => {
    fetchSavedTasks().then(
      data => setSavedTasks(data)
    ).catch(error => setError({ error: true, response: error }))
  }, [])

  return (
    <>
      <Navbar />
      <div className='main-view'>
        <Routes>
          <Route path='/:category' element={<SelectTaskView savedTasks={savedTasks} setSavedTasks={setSavedTasks} error={error} setError={setError}/>} />
          <Route path='/' element={<HomeView />} />
          <Route path='/tasklist' element={<TaskListView savedTasks={savedTasks} setSavedTasks={setSavedTasks}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;