import { Link } from "react-router-dom";
import React from 'react'

export default function App() {
  return (
    <div>
      <h1>Vacancy Managment System</h1>
        <Link to="/loginform">LogIn</Link> |{" "}
        <Link to="/signinform">SignIn</Link>
    </div>
  );
}