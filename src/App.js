import React from 'react'

import {BrowserRouter , Route , Routes} from "react-router-dom"

import Home from "./enter/Home.jsx"

import Dapp from "./enter/Dapp.jsx"

import Login from "./enter/Login"


import Form from "./enter/Form"


function App() {
  return (
    
<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>}/>


<Route path="/Dapp" element={<Dapp/>}/>

<Route path="/Login" element={<Login/>}/>

<Route path="/Form" element={<Form/>}/>


</Routes>


</BrowserRouter>

  )
}

export default App