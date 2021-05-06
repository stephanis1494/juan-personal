import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div style={{ marginLeft: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Link to='/' style={{ marginRight: '12px' }}>
          Home
        </Link>
        <Link to='/about' style={{ marginRight: '12px' }}>
          About
        </Link>
        <Link to='/contact'>
          Contact
        </Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '8px 0px' }}>
        <div>
          My count is
        </div>
        <div style={{ marginLeft: '8px' }}>{count}</div>
      </div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default Header

