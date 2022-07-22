import React from 'react'
import { Link } from 'react-router-dom'

function Header()
{
  return (
    <Link to="/">
      <div>
        <h1 className="content title">Cryptopedia</h1>
      </div>
    </Link>
  )
}
export default Header