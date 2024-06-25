import { FaSearch } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

import './IdSearchForm.css'

const IdSearchForm = ({ menuOpen, setMenuOpen }) => {
  const { idSearchQuery, setIdSearchQuery } = useAuth()

  const navigate = useNavigate()

  const handleSearchClick = async (e) => {
    e.preventDefault()
    if (idSearchQuery) {
      navigate(`/admin-panel/users-data`)
      setMenuOpen(false)
    } else {
      alert('Please enter a user ID to search')
    }
  }

  return (
    <form onSubmit={handleSearchClick} className="navbar-search-container">
      <input
        type="text"
        placeholder="Search User by ID"
        className="navbar-search"
        value={idSearchQuery}
        onChange={(e) => setIdSearchQuery(e.target.value)}
      />
      <button type="submit" className="search-btn">
        <FaSearch className="search-icon" />
      </button>
    </form>
  )
}

export default IdSearchForm
