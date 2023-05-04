import './App.css';
import { useState} from "react";
import axios from "axios";
import Home from './routes/Home';
import CreateUser from './routes/CreateUser';
import V4V5 from './routes/V4-V5';
import V1V3 from './routes/V1-V3';
import Login from './routes/Login';
import Protected from "./routes/Protected"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [userJwt, setUserJwt] = useState(localStorage.getItem('token'));
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  let username = localStorage.getItem('uname');

  const deleteUser = (event) => {
    event.preventDefault();

    if (window.confirm("Are you sure, you want to delete user?")) {
      axios.delete('http://localhost:8080/deleteuser/' + username)
        .then(response => {
          console.log("User is deleted", response.data);
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.alert("User is deleted, logging out.");
          window.location.reload(true);
        })
        .catch(error => {
          window.alert("Something went wrong.");
          console.log("Not working", error)
        })
    }
  }

  let authRoutes = <>
    <Route path="/createuser" element={<CreateUser />} />
    <Route path="/V4-V5" element={<V4V5 />} />
    <Route path="/V1-V3" element={<V1V3 />} />
    <Route path="/login" element={<Login login={(newJwt) => {
      setUserJwt(newJwt)
    }} />} />
  </>

  if (userJwt != null) {
    authRoutes = <>
      <Route path="/Protected" element={<Protected />} />
      <Route path="/V4-V5" element={<V4V5 />} />
      <Route path="/V1-V3" element={<V1V3 />} />
    </>
  }

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar">
          <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
            {/* icon from heroicons.com */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className={isNavExpanded ? "navmenu expanded" : "navmenu"}>
            {userJwt != null ?
              <>
                <ul>
                  <li><Link to="/"><div>Home</div></Link></li>
                  <li><Link to="/V1-V3"><div>Visuals V1-V3</div></Link></li>
                  <li><Link to="/V4-V5"><div>Visuals V4-V5</div></Link></li>
                  <button onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('uname');
                    window.location.reload(true);
                  }}>Log out</button>
                  <button onClick={deleteUser}>Delete user</button>
                </ul>
              </>
              :
              <>
                <ul>
                  <li><Link to="/"><div>Home</div></Link></li>
                  <li><Link to="/V1-V3"><div>Visuals V1-V3</div></Link></li>
                  <li><Link to="/V4-V5"><div>Visuals V4-V5</div></Link></li>
                  <li><Link to="/createuser"><div>Create User</div></Link></li>
                  <li><Link to="/login"><div>Login</div></Link></li>
                </ul>

              </>
            }
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home userLoggedIn={userJwt != null} />} />
          {authRoutes}
          <Route path="*" element={<Home userLoggedIn={userJwt != null} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
