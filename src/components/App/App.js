import './App.css';
import Navbar from '../Navbar/Navbar';
import HomeView from '../HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';
import SelectTaskView from '../SelectTaskView/SelectTaskView';
import TaskListView from '../TaskListView/TaskListView'
import savedData from '../../dataList/savedData'
import { useState } from 'react';

const App = () => {

  const [savedTasks, setSavedTasks] = useState(savedData)

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