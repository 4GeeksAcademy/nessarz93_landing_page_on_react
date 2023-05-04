import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white-50" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white-50" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white-50" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;