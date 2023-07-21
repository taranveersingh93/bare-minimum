import './App.css';
import Navbar from '../Navbar/Navbar';
import HomeView from '../HomeView/HomeView';
import { Routes, Route } from 'react-router-dom';
import SelectTaskView from '../SelectTaskView/SelectTaskView';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/:id' element={<SelectTaskView />} />
          <Route path='/' element={<HomeView />} />
        </Routes>
      </main>
    </>
  )
}

export default App;