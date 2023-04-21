import React from 'react'
import { Link } from 'react-router-dom'
import Protected from "../routes/Protected"

export default function Home(props) {
  return (
    <div>
        <h1>Main page of the ClimateView project</h1>
        <p>
          Here will be some info about the project.
        </p> 
        
        <div>
          User login status : {props.userLoggedIn ? 
          <div>
            Is logged in <br></br>
            <Link to="/Protected">Go to protected view</Link>
            </div>  : "not logged in" } 
        </div>
    </div>
  )
}
