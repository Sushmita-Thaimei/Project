import React from "react";
import searchLogo from "./images/searchLogo.png";
import clickLogo from "./images/clickLogo.jpg";
import bookLogo from "./images/bookLogo.png";

function Headline() {
  return (
    <section className="section bg-light">
      <h4 className="text-center mt-4 text-primary">
        HOW TO BOOK YOUR APPOINTMENT
      </h4>
      {/* FIRST */}
      <div className="container-md mt-4">
        <div className="row">
          <div className="col">
            <div className="row mb-3">
              <div className="col-md-2">
                <i className="d-flex justify-content-start">
                  <img src={searchLogo} height={40} width={40} />
                </i>
              </div>
              <div className="col-md-10">
                <p style={{ fontSize: "15px" }} class="m-0 p-0 fw-bold">
                  Search <br />
                </p>
                By Location, Specialities, Insurance, <br />
                Doctors, Clinics, Hospital etc..
              </div>
            </div>
          </div>
          {/* SECOND */}
          <div className="col">
            <div className="row">
              <div className="col-md-2">
                <i className="d-flex justify-content-start">
                  <img src={clickLogo} height={40} width={40} />
                </i>
              </div>
              <div className="col-md-10">
                <p style={{ fontSize: "15px" }} class="m-0 p-0 fw-bold">
                  Select <br />
                </p>
                Select based on Reviews, Nationality, <br />
                Doctors, Clinics, Hospital etc..
              </div>
            </div>
          </div>
          {/* THIRD */}
          <div className="col">
            <div className="row">
              <div className="col-md-2">
                <i className="d-flex justify-content-start">
                  <img src={bookLogo} height={40} width={40} />
                </i>
              </div>
              <div className="col-md-10">
                <p style={{ fontSize: "15px" }} class="m-0 p-0 fw-bold">
                  Book <br />
                </p>
                Book your appointment and pay at the <br />
                Clinic/Hospital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Headline;
