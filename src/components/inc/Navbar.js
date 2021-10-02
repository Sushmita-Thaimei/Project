import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const handleChange = (type) => {
    switch (type) {
      case 1:
        history.push("/");
        break;
      case 2:
        history.push("/signup");
        break;
      case 3:
        history.push("/booking");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary">
        <div className="container">
          <span
            style={{ cursor: "pointer" }}
            className="navbar-brand text-light"
            onClick={() => handleChange(1)}
          >
            D<FaStethoscope color="primary" size="1rem" />
            CAPP
          </span>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  FOR CLINIC AND HOSPITAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleChange(3)}
                  className="nav-link text-light"
                >
                  Booking
                </span>
              </li>
              <li className="nav-item">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleChange(2)}
                  className="nav-link text-light"
                >
                  Login | SignUp
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
