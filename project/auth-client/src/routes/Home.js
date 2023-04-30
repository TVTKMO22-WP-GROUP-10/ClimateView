import React from 'react'
import { Link } from 'react-router-dom'



export default function Home(props) {

  let usename = localStorage.getItem('uname');

  return (
    <div>
      <h1>Main page of the ClimateView project</h1>
      <p>
        Here will be some info about the project.
      </p>

      <div>
        User login status : {props.userLoggedIn ?
          <div>
            Logged in , welcome { usename } <br></br>
                <Link to="/Protected">Go to protected view</Link>
          </div> 
          : "not logged in"}
          
      </div>
    </div>
  )
}
