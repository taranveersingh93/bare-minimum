import './App.css';
import Navbar from '../Navbar/Navbar';
import HomeView from '../HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';
import SelectTaskView from '../SelectTaskView/SelectTaskView';
import TaskListView from '../TaskListView/TaskListView'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='main-view'>
        <Routes>
          <Route path='/:id' element={<SelectTaskView />} />
          <Route path='/' element={<HomeView />} />
          <Route path='/tasklist' element={<TaskListView />} />
        </Routes>
      </div>
    </>
  )
}

export default App;