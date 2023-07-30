import './App.css';
import Navbar from '../Navbar/Navbar';
import HomeView from '../HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';
import SelectTaskView from '../SelectTaskView/SelectTaskView';
import TaskListView from '../TaskListView/TaskListView'
import { useEffect, useState } from 'react';
import { fetchSavedTasks } from '../apiCalls';
import PageNotFound from '../PageNotFound/PageNotFound';

const App = () => {
  const [savedTasks, setSavedTasks] = useState([])
  const [serverError, setServerError] = useState(false)

  useEffect(() => {
    fetchSavedTasks().then(
      data => {
        setSavedTasks(data)
        setServerError(false)
      }
    ).catch(error => setServerError(true))
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/:category' element={<SelectTaskView savedTasks={savedTasks} setSavedTasks={setSavedTasks}/>} />
          <Route path='/' element={<HomeView serverError={serverError}/>} />
          <Route path='/tasklist' element={<TaskListView savedTasks={savedTasks} setSavedTasks={setSavedTasks}/>} />
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </main>
    </>
  )
}

export default App;