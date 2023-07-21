import './App.css';
import Navbar from '../Navbar/Navbar';
import HomeView from '../HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';
import SelectTaskView from '../SelectTaskView/SelectTaskView';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/:id' element={<SelectTaskView />} />
        <Route path='/' element={<HomeView />} /> */}
      </Routes>
    </>
  )
}

export default App;