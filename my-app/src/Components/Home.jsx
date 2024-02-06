import React, { useEffect } from 'react'
import { useState ,} from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
const Home = () => {
const [roomId,setRoomId]=useState("")
const navigate=useNavigate()
const handleJoin=(e)=>{
    e.preventDefault()
    navigate(`/room/${roomId}`)
}
useEffect(()=>{
  
})

  return (
    <div className="container">
  
    <form onSubmit={handleJoin} className="form">
      <input
        type="text"
        value={roomId}
        placeholder="Enter Room Id"
        onChange={(e) => setRoomId(e.target.value)}
        required
        className="input"
      />
      <button type="submit" className="button">Join</button>
    </form>
  </div>
  )
}

export default Home