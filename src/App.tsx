import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homelayout from './components/layout/pagesLayout/Homelayout'
import Homepage from './pages/Homepage'
import Undefined from './pages/Undefined'
import Userpage from './pages/Userpage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homelayout />}>
          <Route index element={<Homepage />} />
          <Route path='/user/:id' element={<Userpage />} />
          <Route path='*' element={<Undefined />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
