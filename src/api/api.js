import axios from 'axios'

const API_URL =
  'https://6674a2c475872d0e0a971c02.mockapi.io/mizrahi-tefahot/users/'

export const getData = async (id = '') => {
  try {
    console.log('fetch', id)
    const response = await axios.get(`${API_URL}${id}`)
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
}
