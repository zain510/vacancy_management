import { Link } from "react-router-dom";
import React from 'react'

export default function App() {
  return (
    <div>
      <h1>Vacancy Managment System</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }} >
        <Link to="/candidates/sign_in">SignIn</Link> |{" "}
        <Link to="/candidates/sign_up">SignUp</Link> |{" "}
        <Link to="/users/sign_in">AdminSignIn</Link> |{" "}
        <Link to="/users/create_vacancy">Create Vacancy</Link>
      </nav>
    </div>

  );
}
