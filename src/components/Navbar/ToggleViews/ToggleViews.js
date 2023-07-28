import { NavLink } from "react-router-dom";
import './ToggleViews.css'

const ToggleViews = () => {
  return (
    <nav className="toggle-views">
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/tasklist'>Task List</NavLink>
    </nav>
  )
}

export default ToggleViews;