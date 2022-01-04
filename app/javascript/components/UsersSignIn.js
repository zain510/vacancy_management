import React, {useState} from 'react'
import { Link } from "react-router-dom";
import UsersWelcome from '../components/UsersWelcome'
import { Redirect } from 'react-router'

function UsersSignIn(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(true);

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value)
  }

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value)
  }   

  const handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('/api/v1/users/sign_in', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      console.log(data)
      if (data.token)
        setRedirect(false)
    })

    setEmail("")
    setPassword("")
       
  }
  const formDivStyle = {
    margin: "auto",
    padding: "20px",
    width: "80%"
  }

  if (redirect) {
    return(
      <div style={formDivStyle}>
        <h1>Sign In</h1>
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input value={email} onChange={handleEmailChange} type="text" placeholder="email"/>
          </div>

          <div className="field">
            <label>Password</label>
            <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
          </div>
           
          <div> 
            <button className="ui button" type="submit">Sign In</button>
          </div>
        </form>
      </div>
    )
  }
  else{
    return < UsersWelcome />
  }
}

export default UsersSignIn;
