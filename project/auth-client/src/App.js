import './App.css';
import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

import Home from './routes/Home';
import CreateUser from './routes/CreateUser';
import FirstView from './routes/FirstView';
import SecondView from './routes/SecondView';
import Login from './routes/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [uname, setUname] = useState("repe");
  const [pw, setPw] = useState("repe");

  /**
   * Sends creadentials in form data
   */
  function credentialsAsRequestParams(){

    const formData = new FormData();
    formData.append('uname', uname);
    formData.append('pw', pw);

    //Save response token in localstorage
    axios.post('http://localhost:8080/login', formData)
      .then(response => localStorage.setItem("token", response.data))
      .catch(e=>console.log(e.message))
  }

  /**
   * Request with bearer token in header
   */
  function requestWithBearerToken(){

    //Bearer token from localstorage for the request
    const config = {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      withCredentials: true
    }

    axios.get('http://localhost:8080/private', config)
      .then(response => console.log(response.data))
      .catch( e => console.log(e.message))
  }

  /**
   * Sends credentials as base 64 coded basic authorization header
   */
  const credentialsAsBasicAuth = ()=>{

    //Base64 coding the string username:password
    const base64credentials =  Buffer.from(`${uname}:${pw}`).toString('base64');
   
    const config = {
      headers:{
        'Authorization': `Basic ${base64credentials}`
      },
      withCredentials: true
    }

    axios.post('http://localhost:8080/private', {}, config)
      .then(response => console.log(response.data))
      .catch( e => console.log(e.message))
  }

  return (
    <BrowserRouter>
    <div>
      <div className="navbar">
        <Link to="/"><div>Home</div></Link>
        <Link to="/createuser"><div>Create User</div></Link>
        <Link to="/firstview"><div>First view</div></Link>
        <Link to="/secondview"><div>Second view</div></Link>
        <Link to="/login"><div>Login</div></Link>
      </div>
      <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="/createuser" element= { <CreateUser /> } />
        <Route path="/firstview" element= { <FirstView /> } />
        <Route path="/secondview" element= { <SecondView /> } />
        <Route path="/login" element= { <Login /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
