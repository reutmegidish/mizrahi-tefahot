import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [idSearchQuery, setIdSearchQuery] = useState('')

  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    user,
    login,
    logout,
    idSearchQuery,
    setIdSearchQuery,
    isAdmin: user?.isAdmin || false,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
