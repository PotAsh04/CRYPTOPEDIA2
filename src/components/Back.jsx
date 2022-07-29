import React from 'react'
import { Link } from 'react-router-dom'

function Back(){
  return (
    <Link to={`/`}>
    <div className='backbtn' >
    <button
        className="btn btn2"
        type="button">
      Home
      </button>
    </div>
    </Link>
  )
}

export default Back