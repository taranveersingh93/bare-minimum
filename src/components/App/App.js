import './App.css';
import Navbar from '../Navbar/Navbar';
import HomeView from '../HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';
import SelectTaskView from '../SelectTaskView/SelectTaskView';
import TaskListView from '../TaskListView/TaskListView'
import { fetchTasks } from '../apiCalls'
import { useState, useEffect } from 'react';

const App = () => {

  useEffect(() => {
    fetchTasks().then(
      data => setSavedTasks(data)
    )
  })

  const [savedTasks, setSavedTasks] = useState('')

  return (
    <>
      <Navbar />
      <div className='main-view'>
        <Routes>
          <Route path='/:category' element={<SelectTaskView />} />
          <Route path='/' element={<HomeView />} />
          <Route path='/tasklist' element={<TaskListView savedTasks={savedTasks} setSavedTasks={setSavedTasks}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App;