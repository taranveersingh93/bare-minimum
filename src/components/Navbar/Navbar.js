import Logo from './Logo/Logo';
import './Navbar.css';
import ToggleViews from './ToggleViews/ToggleViews'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'><Logo /></Link>
      <ToggleViews />
    </nav>
  )
}

export default Navbar;