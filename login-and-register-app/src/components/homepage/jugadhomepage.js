import React from 'react'
import "./homepage.css"
import {useNavigate} from "react-router-dom"
import { BrowserRouter as Link,Router, Route, Routes } from "react-router-dom";
export default function jugadhomepage() {
    return (
      <Router>
        <div>
          <Link to="/about">About</Link>
  
          <br />
          <br />
  
          {/* 👇️ If you need to simply link to external URL */}
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Google.com
          </a>
        </div>
  
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
  
  function About() {
    // 👇️ redirect to external URL
    window.location.replace('https://google.com');
  
    return null;
  }