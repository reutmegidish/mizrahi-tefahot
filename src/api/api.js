import axios from 'axios'

const API_URL =
  'https://6674a2c475872d0e0a971c02.mockapi.io/mizrahi-tefahot/users/'

// TODO: change to one modolar function for data

export const getData = async (id = '') => {
  try {
    const response = await axios.get(`${API_URL}${id}`)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const depositCashData = async (id = '', data) => {
  try {
    const response = await axios.put(`${API_URL}${id}`, data)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const addUser = async (data) => {
  try {
    const response = await axios.post(API_URL, data)
    return response.data
  } catch (error) {
    throw new Error('Error adding user')
  }
}
