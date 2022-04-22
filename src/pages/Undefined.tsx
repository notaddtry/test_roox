import React from 'react'
import { useNavigate } from 'react-router'

const Undefined = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Page not found...</h1>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Undefined
