import React from 'react'

import { useNavigate } from 'react-router'

const Undefined = () => {
  const navigate = useNavigate()

  return (
    <div className='undefined_wrapper'>
      <h1>Page not found...</h1>
      <button onClick={() => navigate('/')} className='undefined_back'>
        Back
      </button>
    </div>
  )
}

export default Undefined
