import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './AdminNavbar.css'

import IdSearchForm from '../IdSearchForm/IdSearchForm'

// TODO: add onClick on logo and navigte to the home page
// TODO: add logout btn

const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="./images/logo/admin-logo.png"
          alt="Logo"
          className="navbar-logo"
        />
        <div className="navbar-brand">Admin Panel</div>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className="hamburger-icon">{menuOpen ? '✖' : '☰'}</div>
        </div>
      </div>
      <div className="navbar-middle"></div>

      {/* TODO: change to componnet */}
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <IdSearchForm menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* TODO: use map() */}
        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-page navbar-button' : 'navbar-button'
          }
          to="/admin-panel/users-data"
        >
          All Users
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? 'active-page navbar-button' : 'navbar-button'
          }
          to="/admin-panel/add-user"
        >
          Add User
        </NavLink>
      </div>
    </nav>
  )
}

export default AdminNavbar
