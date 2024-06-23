import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'
import { getData } from '../../api/api'

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

const MyTable = () => {
  // TODO: useContext for globaldata
  const [data, setData] = useState([])

  // TODO: Handels error
  useEffect(() => {
    const userData = async () => {
      try {
        const response = await getData()
        if (response) {
          setData(response)
        }
      } catch (error) {
        console.error('error', error)
      }
    }
    userData()
  }, [])

  const handleDeposit = (id) => {
    console.log(`Deposit for id ${id}`)
  }

  const handleWithdraw = (id) => {
    console.log(`Withdraw for id ${id}`)
  }

  const handleTransfer = (id) => {
    console.log(`Transfer for id ${id}`)
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
            {[
              'Name',
              'ID',
              'Email',
              'Age',
              'Cash',
              'Accounts',
              'Deposit',
              'Withdraw',
              'Transfer',
              'Remove',
            ].map((header) => (
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
              <ResponsiveTableCell>{row.accounts}</ResponsiveTableCell>
              <ResponsiveTableCell>
                <Button onClick={() => handleDeposit(row.id)}>Deposit</Button>
              </ResponsiveTableCell>
              <ResponsiveTableCell>
                <Button onClick={() => handleWithdraw(row.id)}>Withdraw</Button>
              </ResponsiveTableCell>
              <ResponsiveTableCell>
                <Button onClick={() => handleTransfer(row.id)}>Transfer</Button>
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

export default MyTable
