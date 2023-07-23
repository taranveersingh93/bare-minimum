import Logo from './Logo/Logo';
import './Navbar.css';
import ToggleViews from './ToggleViews/ToggleViews'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'><Logo /></Link>
      <ToggleViews />
    </div>
  )
}

export default Navbar;