import { useParams } from 'react-router-dom'
import UsersTable from './UsersDataPage '

const UsersDataPage = () => {
  const { userId } = useParams()
  return <UsersTable userId={userId} />
}

export default UsersDataPage
