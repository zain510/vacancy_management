import React, {useState} from 'react'
import { Link } from "react-router-dom";
function SignInForm(props) {
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [experience, setExperience] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFirstNameChange = (evt) => {
        setFirstName(evt.target.value)
    }

    const handleLastNameChange = (evt) => {
        setLastName(evt.target.value)
    }

    const handleExperienceChange = (evt) => {
        setExperience(evt.target.value)
    }  

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }   

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch('/candidates', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                first_name,
                last_name,
                experience,
                email,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.candidate)
        })
        setFirstName("")
        setLastName("")
        setExperience("")
        setEmail("")
        setPassword("")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    
    return(
        <div style={formDivStyle}>
            <h1>Sign Up</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>FirstName</label>
                    <input value={first_name} onChange={handleFirstNameChange} type="text" placeholder="first name"/>
                </div>

                <div className="field">
                    <label>LastName</label>
                    <input value={last_name} onChange={handleLastNameChange} type="text" placeholder="last name"/>
                </div>

                 <div className="field">
                    <label>Experience</label>
                    <input value={experience} onChange={handleExperienceChange} type="number" placeholder="experience"/>
                </div>

                <div className="field">
                    <label>Email</label>
                    <input value={email} onChange={handleEmailChange} type="text" placeholder="email"/>
                </div>

                <div className="field">
                    <label>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
            <div>
              <Link to="/loginform">LogIn</Link>
            </div>
        </div>
    )
}

export default SignInForm