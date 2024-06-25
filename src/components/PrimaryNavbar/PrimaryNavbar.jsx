import { NavLink } from 'react-router-dom'
import './PrimaryNavbar.css'
import { useAuth } from '../../contexts/AuthContext'

const NAVBAR_LOGO_SRC = './images/logo/navbar-logo.png'
// TODO: refactor and use map()
function PrimaryNavbar() {
  const { user, logout } = useAuth()
  return (
    <nav className="primary-navbar d-flex flex-row space-between  align-center ">
      <ul>
        <li>
          <NavLink className="home-link" to="/">
            <img
              className="primary-navbar-logo"
              src={NAVBAR_LOGO_SRC}
              alt={'mizrahi-tefahot-logo'}
            />
          </NavLink>
        </li>
      </ul>

      <ul>
        <li className="li-login-primary-navbar">
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

export default PrimaryNavbar
