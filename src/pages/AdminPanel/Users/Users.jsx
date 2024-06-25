import { useState } from 'react'
import './Users.css'

const Users = () => {
  const { inputID, setInputID } = useState('')
  return (
    <section>
      <form>
        <input
          value={inputID}
          placeholder="Passport ID"
          type="number"
          id="PassportId"
          name="PassportId"
          onChange={(e) => setInputID(e.target.value)}
          required
        />
      </form>
      <button></button>
    </section>
  )
}

export default Users
