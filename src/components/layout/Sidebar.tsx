import React from 'react'
import { useDispatch } from 'react-redux'
import { sortUser } from '../../store/slices/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()

  const handleClick = (type: 'city' | 'company') => {
    dispatch(sortUser(type))
  }

  return (
    <div className='sidebar_wrapper'>
      <span>Сортировка</span>
      <button onClick={() => handleClick('city')}>По городу</button>
      <button onClick={() => handleClick('company')}>По компании</button>
    </div>
  )
}

export default Sidebar
