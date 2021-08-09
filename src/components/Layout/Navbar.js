import { NavLink } from 'react-router-dom'
import './style.css'

const Navbar = () => {
    return (
      <nav className="nav">
        <NavLink activeClassName="active__nav" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active__nav" to="/products">
          Products
        </NavLink>
      </nav>
    );
}

export default Navbar;