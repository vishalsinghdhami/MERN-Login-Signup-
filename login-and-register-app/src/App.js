import "./App.css";
import Homepage from "./components/homepage/homepage.js";
import jugaadHomepage from "./components/homepage/jugadhomepage.js";

import Login from "./components/login/login.js";
import Register from "./components/register/register.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [user, setLoginUser] = useState({});

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")));
  }, []);

  const updateUserDataLC = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user));
    setLoginUser(user);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (<Homepage updateUserDataLC={updateUserDataLC}/>) : (<Login updateUserDataLC={updateUserDataLC} />)
            }
          />
          <Route
            exact
            path="/login"
            element={<Login updateUserDataLC={updateUserDataLC}/>}
          />
          <Route exact path="/register" element={<Register />} />
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
