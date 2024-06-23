import { Outlet } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './PrimaryLayout.css'

const PrimaryLayout = () => {
  return (
    <div className="primary-layout d-flex flex-column">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default PrimaryLayout
