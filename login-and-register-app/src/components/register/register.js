import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import{useNavigate} from "react-router-dom"
const Register = () => {
    const navigate=useNavigate();
    const [user,setUser]=useState(
        {
            name:"",
            email:"",
            password:"",
            reEnterPassword:""
        }
    )
  
    const handlechange= e=> {
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const registerfun=()=> {
          const{name,email,password,reEnterPassword}=user;
          if(name && email &&password&& (password===reEnterPassword))
        { alert("posted");
          axios.post("http://localhost:9002/register",user)
          .then(res=>{
            alert(res.data.message)
            navigate("/login")
        }
          )
        }
        else{
            alert("Incomplete form")
        }
}
  
  
    return (
    <div className="register">
        {console.log("user",user)}
      <h1>Register</h1>
      <input type="text" name="name" value={user.name}  placeholder="Your Name"  onChange={handlechange}></input>
      <input type="text" name="email" value={user.email}  placeholder="Your Email"  onChange={handlechange}></input>
      <input type="password" name="password" value={user.password}  placeholder="Set Password"  onChange={handlechange}></input>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword}  placeholder="Re-enter Password"  onChange={handlechange}></input>
      <div className="button"  onClick={registerfun} >Register</div>
      <div>or</div>
      <div className="button" onClick={()=>navigate("/login")}>Login</div>
    </div>
  );
};

export default Register;
