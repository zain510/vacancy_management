// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "../components/App";
import LoginForm from '../components/LoginForm'
import SignInForm from '../components/SignInForm'
import CreateVacancy from '../components/CreateVacancy'
import AdminLogin from '../components/AdminLogin'
document.addEventListener("DOMContentLoaded", () => {
  render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="loginform" element={<LoginForm />} />
      <Route path="signinform" element={<SignInForm />} />
      <Route path="/createvacancy" element={<CreateVacancy />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  </BrowserRouter>,
    document.body.appendChild(document.createElement("div"))
  );
});