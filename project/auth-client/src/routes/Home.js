import React from 'react'
import { Link } from 'react-router-dom'



export default function Home(props) {

  let usename = localStorage.getItem('uname');

  return (
    <div className='page-texts'>
      <h1>Welcome to the ClimateView project</h1>
      <p>
        This website is made for visualizing climate change data over a long period of time.<br></br><br></br>
        You can find different charts that show data about temperature changes<br></br> and CO2 levels over time on the pages 'Visuals V1-V3' and 'Visuals V4-V5'.<br></br><br></br>
        Links to data sources and their descriptions can be found under every chart.<br></br>
      </p>
      <div>
        User login status  : <br></br>{props.userLoggedIn ?
          <div>
           <b>Logged in , welcome { usename }</b>  <br></br><br></br>
                <Link to="/Protected">Go to protected view</Link>
          </div> 
          : <b>not logged in.</b>}
      </div>
    </div>
  )
}
