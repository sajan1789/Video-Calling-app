import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Room from './Room'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/room/:roomID/' element={<Room/>}/>
    </Routes>
  )
}

export default MainRoutes