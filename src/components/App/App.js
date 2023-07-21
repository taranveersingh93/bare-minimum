import './App.css';
import Navbar from '../Navbar/Navbar';
import HomeView from '../HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';
import SelectTaskView from '../SelectTaskView/SelectTaskView';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='main-view'>
        <Routes>
          <Route path='/:category' element={<SelectTaskView />} />
          <Route path='/' element={<HomeView />} />
        </Routes>
      </div>
    </>
  )
}

export default App;