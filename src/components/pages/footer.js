import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <section
      style={{ fontSize: "14px" }}
      className="section bg-light pt-4 mt-5 "
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-2 col-sm-6">
            <h style={{ fontWeight: "bold" }}>DOCAPP</h>
            <ul className="list-unstyled mt-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact Us</li>
              <li>Help</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6">
            <h style={{ fontWeight: "bold" }}>SEARCH FOR</h>
            <ul className="list-unstyled mt-2">
              <li>Doctors</li>
              <li>Clinics</li>
              <li>Hospitals</li>
              <li>Location</li>
              <li>Insurance</li>
              <li>Speciality</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6">
            <h style={{ fontWeight: "bold" }}>Specilities</h>
            <ul className="list-unstyled mt-2">
              <li>Chiropractors</li>
              <li>Dentists</li>
              <li>Dermatologies</li>
              <li>Eye Doctors</li>
              <li>Gynecologists</li>
              <li>Primary care doctors</li>
              <li>Psychiatrists</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6">
            <ul className="list-unstyled mt-4">
              <li>Chiropractors</li>
              <li>Dentists</li>
              <li>Dermatologies</li>
              <li>Eye Doctors</li>
              <li>Gynecologists</li>
              <li>Primary care doctors</li>
              <li>Psychiatrists</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>Are you from CLinic or Hospital?</li>
              <li>
                <Link style={{ color: "#652295" }}>Register Here</Link>
              </li>

              <li className="mt-4">Contact Us</li>
              <li>
                <Link style={{ fontWeight: "bold" }} className="text-dark">
                  enquiry@docapp.com (+966122606000)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} DOCAPP | Terms of use | Privacy
            Policy Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
