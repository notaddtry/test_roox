import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { fetchUsers } from '../../../store/slices/userSlice'

import Sidebar from '../Sidebar'

import styles from '../layout.module.scss'

const Homelayout = () => {
  const dispatch = useDispatch()

  //Плохая практика-использовать useEffect здесь. Но для решения конкретно этой задачи,
  //необходимо было перенести подгрузку элементов с сервера сюда.
  //Чтобы перенести подргузку эл-ов на страницу UserList,необходимо взаимодействие с API =>
  //POST GET запросы. В этом проекте это реализовано через менеджер состояния.
  useEffect(() => {
    dispatch(fetchUsers())

    // eslint-disable-next-line
  }, [])

  return (
    <>
      <main>
        <aside className={styles.sidebar_wrapper}>
          <Sidebar />
        </aside>
        <Outlet />
      </main>
    </>
  )
}

export default Homelayout
