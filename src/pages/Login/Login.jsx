import './Login.css'
import { useState } from 'react'
import { getData } from '../../api/api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { ID_PATTERN, PASSWORD_PATTERN } from '../../constants/regexPatterns'

// TODO: handle token & secure data
const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // TODO:JS for functions
  const validateUserId = ID_PATTERN.test(userId)
  const validatePassword = PASSWORD_PATTERN.test(password)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!validateUserId) {
      setError('Invalid ID, please try again')
      return
    }
    // change logic => for old psd, check data anyway id id valid
    if (!validatePassword) {
      setError('Invalid password, please try again')

      return
    }

    try {
      const user = await getData(userId)

      if (!user) {
        setError('User not found')
        return
      }

      if (password !== user.password) {
        setError('Incorrect password')
        return
      }

      login(user)

      if (user.isAdmin === true) {
        navigate('/admin-panel')
      } else {
        navigate('/user-dashboard')
      }
      // TODO: refactor handle error
      // TODO: fix bus' when check psd
      setUserId('')
      setPassword('')
      setError('')
    } catch (error) {
      setError('An error occurred. Please try again.')
      console.error('Error:', error)
    }
  }

  return (
    <section className="main-container d-flex flex-column align-center justify-center">
      <div className="log-in-container d-flex flex-column justify-center  align-center justify-center">
        <div>
          <img src="./images/logo/login-logo.png" alt="login-logo" />
        </div>
        {/* TODO: use commponent */}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="user-id">User ID:</label>
            <br />
            <input
              value={userId}
              placeholder="ID"
              type="number"
              id="user-id"
              name="user-id"
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              value={password}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
