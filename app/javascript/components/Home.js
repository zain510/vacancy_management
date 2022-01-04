import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { MyContext } from '../components/CandidatesSignIn'

export default function Home() {
  const current_user = useContext(MyContext)
  return(
    <div>
      <h1> {current_user} </h1>
    </div>
  );
}
