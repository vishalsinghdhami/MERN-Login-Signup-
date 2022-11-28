import React from 'react'
import axios from 'axios';
import "./login.css"
import { useState } from "react"
import{useNavigate} from "react-router-dom"
const Login = (  {updateUserDataLC}  ) => {
    const navigate = useNavigate();


    const [user,setUser]=useState(
        {
            
            email:"",
            password:"",
         
        }
    )
  
    const handleChange= e=> {
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
  const loginfun=()=>{
     axios.post("http://localhost:9002/login",user)
     .then(res =>{
        alert(res.data.message)
        updateUserDataLC(res.data.user) 
        navigate("/")
    }         
     )
  }
  
    return (
       <div className='login'>
         {console.log("user",user)}
         <h1>Login</h1>
         <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={loginfun} >Login</div>
            <div>or</div>
            <div className="button" onClick={()=>navigate("/register")} >Register</div>
           </div>
  )
}

export default Login