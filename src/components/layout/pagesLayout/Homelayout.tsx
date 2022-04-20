import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Homelayout = () => {
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
