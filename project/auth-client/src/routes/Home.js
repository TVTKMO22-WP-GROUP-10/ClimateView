import React from 'react'
import { Link } from 'react-router-dom'



export default function Home(props) {

  let usename = localStorage.getItem('uname');

  return (
    <div className='page-texts'>
      <h1>Main page of the ClimateView project</h1>
      <p>
        Here will be some info about the project.
      </p>

      <div>
        User login status  : <br></br>{props.userLoggedIn ?
          <div>
           <b>Logged in , welcome { usename }</b>  <br></br> <br></br>
                <Link to="/Protected">Go to protected view</Link>
          </div> 
          : <b>not logged in</b>}
          
      </div>
    </div>
  )
}
