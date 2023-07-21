import Logo from './Logo/Logo';
import './Navbar.css';
import ToggleViews from './ToggleViews/ToggleViews'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <ToggleViews />
    </div>
  )
}

export default Navbar;