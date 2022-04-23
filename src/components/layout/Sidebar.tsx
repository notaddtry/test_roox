import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/hooks'

import { sortUser } from '../../store/slices/userSlice'

import styles from './layout.module.scss'

const Sidebar = () => {
  const users = useAppSelector((state) => state.user.users)
  const [isDisable, setDisable] = useState(false)
  const dispatch = useDispatch()

  const handleClick = (type: 'city' | 'company') => {
    dispatch(sortUser(type))
  }

  useEffect(() => {
    users.length ? setDisable(false) : setDisable(true)
  }, [users])

  return (
    <div className={styles.sidebar_body}>
      <span>Сортировка</span>
      <button
        disabled={isDisable}
        onClick={() => handleClick('city')}
        className={styles.sidebar_btn}>
        По городу
      </button>
      <button
        disabled={isDisable}
        onClick={() => handleClick('company')}
        className={styles.sidebar_btn}>
        По компании
      </button>
    </div>
  )
}

export default Sidebar
