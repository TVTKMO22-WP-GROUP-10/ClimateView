import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Constants from "../Constants.json"

export default function LoginView(props) {

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
      localStorage.setItem("uname", result.config.params.uname)
      props.login(localStorage.getItem('token'))
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
        loginUIControls = <button className="form-button" type="submit">Login</button>
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
    <div className='page-texts'>
      <h1> Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          Username <br />
          <input type="text" name="username"></input>
        </div>
        <div>
          Password <br />
          <input type="password" name="password"></input>
        </div>
        <div>
        <br></br>
          {loginUIControls}
        </div>
      </form>
    </div>
  )
}
