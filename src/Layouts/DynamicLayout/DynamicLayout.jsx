import { Outlet } from 'react-router-dom'

import Navbar from '../../components/PrimaryNavbar/PrimaryNavbar'
import Footer from '../../components/Footer/Footer'
import './DynamicLayout.css'
import { AdminNavbar } from '../../components'
import { useAuth } from '../../contexts/AuthContext'

const DynamicLayout = () => {
  const { user } = useAuth()
  return (
    <div className="primary-layout d-flex flex-column">
      <header>{user?.isAdmin ? <AdminNavbar /> : <Navbar />}</header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default DynamicLayout
