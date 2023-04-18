import React, { useState } from 'react'
import axios from 'axios'
import Constants from "../Constants.json"

export default function LoginView() {

  const [loginState, setLoginState] = useState("")

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post(Constants.API_ADDRESS +"/login",
      null,
      {
        params: {
          uname: event.target.username.value,
          pw: event.target.password.value
        }
      }
      )
      localStorage.setItem("token", result.data)
      console.log(result);
      console.log("XXXX");
       
    } catch (error) {
      console.error(error);
    }



  }

  return (
    <div>
      <h1> Login page</h1>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}
