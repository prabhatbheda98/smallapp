import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SMALL-APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active"  to="/register">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
