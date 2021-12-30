import { Link } from "react-router-dom";
import React from 'react'

export default function App() {
  return (
    <div>
      <h1>Vacancy Managment System</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/loginform">LogIn</Link> |{" "}
        <Link to="/signinform">SignIn</Link> |{" "}
        <Link to="/createvacancy">CreateVacancy</Link> | |{" "}
        <Link to="/admin/login">AdminLogin</Link>
        </nav>
    </div>

  );
}