import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, isAdmin } = useAuth()

  if (!user) {
    return <Navigate to="/login-page" replace />
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/user-dashboard" replace />
  }

  return children
}

export default ProtectedRoute
