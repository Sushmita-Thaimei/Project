import React from 'react';
import {FaTooth} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Dental <FaTooth color='primary' size='1rem' /> Care</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">FOR CLINIC AND HOSPITAL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">CONTACT</a>
              </li>
              <li className="nav-item">
                <Link to="/booking" className="nav-link text-light">Login | SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>       
    </div>
  )
}

export default Navbar;
