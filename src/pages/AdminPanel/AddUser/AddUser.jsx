import { useState } from 'react'
import './AddUser.css'
import { addUser, getData } from '../../../api/api'
import { ID_PATTERN } from '../../../constants/regexPatterns'

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    id: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // TODO: check if needed utils functions for validate & refactor

  const validateForm = () => {
    const newErrors = {}

    if (formData.age < 18) {
      newErrors.age = 'Age must be over 18'
    }

    if (!ID_PATTERN.test(formData.id)) {
      newErrors.id = 'ID must be 9 digits and start with 2'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      const users = await getData()
      const idExists = users.some((user) => user.id === formData.id)
      // TODO: use tostify
      if (idExists) {
        alert('User with this ID already exists')
        return
      }

      await addUser(formData)
      alert('User added successfully')
      setFormData({
        name: '',
        email: '',
        age: '',
        id: '',
      })
      setErrors({})
    } catch (error) {
      console.error('Error adding user:', error)
      alert('Error adding user')
    }
  }

  // TODO: refactor the code, use commponent, use object
  return (
    <div className="add-user-container">
      <form className="add-user-form" onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </label>
        <label>
          Passport ID:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
          {errors.id && <span className="error">{errors.id}</span>}
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default AddUser
