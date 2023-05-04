import React, { useState } from 'react'
import axios from 'axios'
import Constants from '../Constants.json'
import { useNavigate } from 'react-router-dom'

export default function CreateUserView() {

    const navigate = useNavigate();
    const [signUpProcessState, setSignupProcessState] = useState("idle");

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        setSignupProcessState("processing");
        const formData = new FormData();
        formData.append('uname', event.target.username.value);
        formData.append('pw', event.target.password.value);
        
        try {
            const result = await axios.post(Constants.API_ADDRESS + '/register', formData)
            setSignupProcessState("signupSuccess");
            setTimeout(() => {
            navigate('/login', {replace:true});
            }, 1500)

        } catch (error) {
            console.error(error);
            setSignupProcessState("signupFailure")
        }
    }

    let signUpUIControls = null;
    switch (signUpProcessState) {
        case "idle":
            signUpUIControls = <button className='form-button' type="submit">Create User</button>
            break;

        case "processing":
            signUpUIControls = <span style={{ color: "blue" }}>Processing...</span>
            break;

        case "signupSuccess":
            signUpUIControls = <span style={{ color: "green" }}>Sign up completed succesfully.</span>
            break;

        case "signupFailure":
            signUpUIControls = <span style={{ color: "red" }}>Something went wrong.</span>
            break;
    }

    return (
        <div className='page-texts'>
            <h1>Create User</h1>
            <form onSubmit={handleSignUpSubmit}>
                <div>
                    User name <br />
                    <input type="text" name="username" />
                </div>
                <div>
                    Password <br />
                    <input type="password" name="password" />
                </div>
                <div>
                    <br></br>
                    {signUpUIControls}
                </div>
            </form>
        </div>
    )
}
