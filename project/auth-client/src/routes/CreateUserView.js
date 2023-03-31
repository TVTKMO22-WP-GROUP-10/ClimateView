import React from 'react'
import axios from 'axios'
import Constants from '../Constants.json'
import { useNavigate } from 'react-router-dom'

export default function CreateUser(){

const navigate = useNavigate();

const handleSignUpSubmit = async (event) => {

    event.preventDefault();
   
    const formData = new FormData();
    formData.append('uname', event.target.username.value);
    formData.append('pw', event.target.password.value);

    try {
        const result = await axios.post(Constants.API_ADDRESS + '/register', formData)
        //setSignupProcessState("signupSuccess");
        console.log(result);
        navigate('/login', { replace : true});
    } catch (error) {

        console.error(error);
        //setSignupProcessState("SignUpFailure")
    }
}

return (
    <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSignUpSubmit}>
            <div>
                User name <br />
                <input type="text" name="username" />
            </div>
            <div>
                Password <br />
                <input type="text" name="password" />
            </div>
            <div>
                <button type="submit">Sign up</button>
            </div>
        </form>
    </div>
)
}
