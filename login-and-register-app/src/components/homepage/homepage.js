import React from 'react'
import "./homepage.css"
import {useNavigate} from "react-router-dom"
import { BrowserRouter as Link,Router, Route, Routes } from "react-router-dom";
 const Homepage = ({updateUserDataLC}) => {
  const navigate=useNavigate();
  return (
  

  


    <div className='homepage'>
        <h1>hello home</h1>
      
        
        <div className='button' onClick={()=>updateUserDataLC({})}>Logout</div>
        </div>
     
  )
}

export default Homepage