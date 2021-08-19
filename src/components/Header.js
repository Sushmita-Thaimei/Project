import React from "react";
import searchLogo from "./images/searchLogo.png";
import clickLogo from "./images/clickLogo.jpg";
import bookLogo from "./images/bookLogo.png";

function Header() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row">
          <h4 className="text-center mt-4">HOW TO BOOK YOUR APPOINTMENT</h4>
          <div className="col-4 d-flex justify-content-center ">
            <img src={searchLogo} height={40} width={40} />
            <p>
              Search <br />
              By Location, Specialities, Insurance, <br />
              Doctors, Clinics, Hospital etc..
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center ">
            <img src={clickLogo} height={40} width={40} />
            <p>
              Select <br />
              Select based on Reviews, Nationality, <br />
              Doctors, Clinics, Hospital etc..
            </p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <img src={bookLogo} height={40} width={40} />
            <p>
              Book <br />
              Book your appointment and pay at the <br />
              Clinic/Hospital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
