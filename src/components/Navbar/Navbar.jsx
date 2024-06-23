import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../contexts/AuthContext'

const NAVBAR_LOGO_SRC = './images/logo/navbar-logo.png'

function Navbar() {
  const { user, logout } = useAuth()
  return (
    <nav className="navbar d-flex flex-row space-between  align-center ">
      <ul>
        <li>
          <NavLink className="home-link" to="/">
            <img
              className="navbar-logo"
              src={NAVBAR_LOGO_SRC}
              alt={'mizrahi-tefahot-logo'}
            />
          </NavLink>
        </li>
      </ul>

      <ul>
        <li className="li-login-navbar">
          {user && user.id ? (
            <NavLink
              className={({ isActive }) => (isActive ? 'active-page' : '')}
              onClick={logout}
              to="/"
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? 'active-page' : '')}
              to="/login-page"
            >
              Account Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
