import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { depositCashData, getData } from '../../../api/api'
import { TABLE_TAGS } from '../../../constants/constans'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'

// TODO: use commponent for style and table, refactor the code
const StyledTableContainer = styled(TableContainer)({
  maxWidth: '100%',
  margin: '0 auto',
  overflowX: 'auto',
})

const StyledTableHead = styled(TableHead)({
  backgroundColor: '#e0e0e0',
  '& th': {
    fontWeight: 'bold',
    borderBottom: '2px solid #000',
  },
})

const StyledTableRow = styled(TableRow)(({ theme, index }) => ({
  backgroundColor: index % 2 === 0 ? '#F7F7F7' : '#FFFFFF',
}))

const ResponsiveTableCell = styled(TableCell)({
  '@media (max-width: 600px)': {
    padding: '8px 4px',
    fontSize: '12px',
  },
})

const UsersTable = () => {
  const { userId } = useParams()
  const [data, setData] = useState([])
  const [refetch, setRefetch] = useState(false)

  const { idSearchQuery, setIdSearchQuery } = useAuth()

  // TODO: fix bug-reftch all users (after Deposit user by search ID)
  useEffect(() => {
    const userData = async () => {
      try {
        const response = await getData(idSearchQuery)
        if (response) {
          setData(Array.isArray(response) ? response : [response])
          setIdSearchQuery('')
        }
      } catch (error) {
        console.error('error', error)
      }
    }
    userData()
  }, [refetch, userId])

  const handleDeposit = async (id) => {
    const amount = parseFloat(prompt('How much?'))

    const updatedUser = data.find((user) => user.id === id)
    if (!updatedUser) {
      return
    }
    updatedUser.cash += amount
    await depositCashData(id, updatedUser)
    alert('Successfully added money')
    setRefetch((prev) => !prev)
  }

  const handleRemove = (id) => {
    console.log(`Remove for id ${id}`)
  }

  if (!data || data.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <StyledTableHead>
          <TableRow>
            {TABLE_TAGS.map((header) => (
              <ResponsiveTableCell key={header}>{header}</ResponsiveTableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={row.id} index={index}>
              <ResponsiveTableCell>{row.name}</ResponsiveTableCell>
              <ResponsiveTableCell>{row.id}</ResponsiveTableCell>
              <ResponsiveTableCell>{row.email}</ResponsiveTableCell>
              <ResponsiveTableCell>{row.age}</ResponsiveTableCell>
              <ResponsiveTableCell>{row.cash}</ResponsiveTableCell>
              <ResponsiveTableCell>
                <Button onClick={() => handleDeposit(row.id)}>Deposit</Button>
              </ResponsiveTableCell>

              <ResponsiveTableCell>
                <Button onClick={() => handleRemove(row.id)}>Remove</Button>
              </ResponsiveTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default UsersTable
