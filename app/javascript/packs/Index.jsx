// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import CandidatesSignIn from '../components/CandidatesSignIn'
import CandidatesSignUp from '../components/CandidatesSignUp'
import CreateVacancy from '../components/CreateVacancy'
import UsersSignIn from '../components/UsersSignIn'

document.addEventListener("DOMContentLoaded", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/candidates/sign_in" element={<CandidatesSignIn />} />
        <Route path="/candidates/sign_up" element={<CandidatesSignUp />} />
        <Route path="/users/create_vacancy" element={<CreateVacancy />} />
        <Route path="/users/sign_in" element={<UsersSignIn />} />
      </Routes>
    </BrowserRouter>,
    document.body.appendChild(document.createElement("div"))
  );
});
