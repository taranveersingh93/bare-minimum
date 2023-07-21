import { NavLink } from "react-router-dom";

const ToggleViews = () => {
  return (
    <div className="toggle-views">
      <NavLink to='/'><p>Home</p></NavLink>
      <NavLink to='/tasklist'><p>Task List</p></NavLink>
    </div>
  )
}

export default ToggleViews;