import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Home from '../components/Home'
import { Redirect } from 'react-router'
import jwt_decode from "jwt-decode";
export const MyContext = React.createContext();

function CandidateSignIn(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(true);
  const [current_user, setCurrentUser] = useState("");
  const handleEmailChange = (evt) => {
    setEmail(evt.target.value)
  }

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value)
  }   

  const handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('/api/v1/candidates/sign_in', {
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
      var type = jwt_decode(data.token)
      setCurrentUser(Object.keys(type)[0])
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
    return(
      <MyContext.Provider value = { current_user } >
        < Home />
      </MyContext.Provider>
    )
  }
}

export default CandidateSignIn;
