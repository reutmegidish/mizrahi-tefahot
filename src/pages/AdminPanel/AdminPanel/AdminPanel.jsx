import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import './AdminPanel.css'

const AdminPanel = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <section className="admin-container d-flex flex-column align-center padding gap">
      <div className="admin-welcome-container d-flex flex-column align-center gap">
        <p>Hello {user.name}</p>
        <p>Have a wonderful day</p>
      </div>
      <div className="manager-panel-container d-flex flex-column align-center ">
        <p className="center-text">Bank Manager Panel</p>

        <div className="manager-panel-btn-container d-flex space-between ">
          <button onClick={() => navigate('actions')}>Actions</button>
          <button>Users</button>
        </div>
      </div>
      <div className="admin-panel-img-container d-flex justify-center">
        <img
          src="./images/admin-panel-img.png"
          alt="admin-panel-img"
          className="admin-panel-img "
        />
      </div>
    </section>
  )
}

export default AdminPanel
