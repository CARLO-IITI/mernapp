import React from 'react'
//we will use react router dom so that on clicking home button we can go to home page
//reloading is not required
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3 fst-italic" to='/' >Pizza Application</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        {/* //collapse navbar-collapse is used to collapse the navbar when the screen size is small */}
      <ul className="navbar-nav me-auto mb-1"> 
        {/* //me-auto is used to push the navbar to the right */}
        <li className="nav-item">
          <Link className="nav-link active fs-4 " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active fs-4 " aria-current="page" to="/login">Login</Link>
        </li>
    </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

