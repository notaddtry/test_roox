import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homelayout from './components/layout/pagesLayout/Homelayout'
import Homepage from './pages/Homepage'
import Userpage from './pages/Userpage'

function App() {
  return (
    <div className='App'>
      <h1>Hello worls</h1>
      <Routes>
        <Route path='/' element={<Homelayout />}>
          <Route index element={<Homepage />} />
          <Route path='/user/:id' element={<Userpage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
