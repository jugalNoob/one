import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
    
    <Link to="/">Home</Link> 
  
    <Link to="/dapp">dapp</Link> 
    <Link to="/form">form</Link> 
    <Link to="/login">Login</Link> 
    </div>
  )
}

export default Home