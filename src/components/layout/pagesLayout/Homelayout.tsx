import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getData } from '../../../lib/api/fetchData'
import { fetchUsers } from '../../../store/slices/userSlice'
import Sidebar from '../Sidebar'

const Homelayout = () => {
  const dispatch = useDispatch()

  //Плохая практика-использовать useEffect здесь.
  useEffect(() => {
    getData(10).then((res) => dispatch(fetchUsers(res)))
  }, [])

  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Homelayout
