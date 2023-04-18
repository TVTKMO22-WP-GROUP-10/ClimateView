import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Constants from "../Constants.json"

export default function LoginView() {

  const navigate = useNavigate();
  const [loginState, setLoginState] = useState("idle")

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setLoginState("processing")
    try {
      const result = await axios.post(Constants.API_ADDRESS + "/login",
        null,
        {
          params: {
            uname: event.target.username.value,
            pw: event.target.password.value
          }
        }
      )
      localStorage.setItem("token", result.data)
      console.log("Response of post request: " + result);
      setLoginState("loginSuccess")
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 1500)


    } catch (error) {
      console.error(error);
      setLoginState("loginFailure")
    }
  }

  let loginUIControls = null;
    
    switch (loginState) {
      case "idle":
        loginUIControls = <button type="submit">Login</button>
        break;
      case "processing":
        loginUIControls = <span style={{ color: "blue" }}> Processing...</span>
        break;
      case "loginSuccess":
        loginUIControls = <span style={{ color: "green" }}> Login successful.</span>
        break;
      case "loginFailure":
        loginUIControls = <span style={{ color: "red" }}> Something went wrong.</span>
        break;
    }

  return (
    <div>
      <h1> Login here</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          Username <br />
          <input type="text" name="username"></input>
        </div>
        <div>
          Password <br />
          <input type="text" name="password"></input>
        </div>
        <div>
          {loginUIControls}
        </div>
      </form>
    </div>
  )
}
