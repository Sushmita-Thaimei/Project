import React from "react";
import { useHistory } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import "../pages/booking.css";

const Booking = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <nav>
        <button onClick={() => handleClick()}>
          <MdKeyboardArrowLeft color="black" size="2rem" />
          Back to my result
        </button>
      </nav>
      <div class="container px-4 text-left">
        <div class="row gx-5 mt-5">
          {/* LEFT SIDE */}
          <div class="col-6 ">
            <div class=" container shadow">
              <div className="row row-cols-1">
                {/* TOP PART */}
                <div class="row row-cols-2 align-items-center">
                  {/* PHOTO */}
                  <div class="col-md-6 ">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/05/23/17/12/doctor-2337835_960_720.jpg"
                      style={{
                        borderRadius: "100%",
                        height: "180px",
                        width: "180px",
                      }}
                    />
                  </div>
                  {/* PROFILE INFO */}
                  <div class="col">
                    {/* NAME AND EXP */}
                    <div class="row m-0 p-0">
                      <p class="m-0 p-0 fw-bold fs-6">
                        Dr. Muhammed Abdul Raouf
                      </p>
                      <p style={{ fontSize: "12px" }} class="m-0 p-0">
                        Specialist- Dermatology
                      </p>
                      <p style={{ fontSize: "12px" }} class="m-0 p-0">
                        16 Yrs of Experience
                      </p>
                    </div>
                    {/* CONTACT */}
                    <div class="row mt-2 m-0 p-0 align-items-center">
                      {/* UNIVERSITY */}
                      <div class="row m-0 p-0 align-items-center">
                        <div class="col-2 m-0 p-0">
                          <i
                            class="fa fa-university"
                            style={{ fontSize: "20px", color: "#652295" }}
                          ></i>
                        </div>
                        <div class="col-10 m-0 p-0">
                          <p
                            style={{ fontSize: "12px" }}
                            class="m-0 p-0 fw-bold"
                          >
                            Alberta Medical Center
                          </p>
                          <p style={{ fontSize: "12px" }} class="m-0 p-0">
                            Alberta City, Alberta
                          </p>
                        </div>
                      </div>

                      {/* EMAIL */}
                      <div class="row mt-1 m-0 p-0 align-items-center">
                        <div class="col-2 m-0 p-0">
                          <i
                            class="fa fa-envelope"
                            style={{ fontSize: "20px", color: "#652295" }}
                          ></i>
                        </div>
                        <div class="col-10 m-0 p-0">
                          <p
                            style={{ fontSize: "12px" }}
                            class="m-0 p-0 fw-bold"
                          >
                            info@email.com
                          </p>
                          <p style={{ fontSize: "12px" }} class="m-0 p-0">
                            email
                          </p>
                        </div>
                      </div>

                      {/* PHONE */}
                      <div class="row mt-1 m-0 p-0 align-items-center">
                        <div class="col-2 m-0 p-0">
                          <i
                            class="fa fa-phone"
                            style={{ fontSize: "20px", color: "#652295" }}
                          ></i>
                        </div>
                        <div class="col-10 m-0 p-0">
                          <p
                            style={{ fontSize: "12px" }}
                            class="m-0 p-0 fw-bold"
                          >
                            9187950314
                          </p>
                          <p style={{ fontSize: "12px" }} class="m-0 p-0">
                            Contact Hospital
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr class="mt-3 mb-3" />

                {/* BOTTOM PART */}
                <div class="container mb-3">
                  {/* DATE */}
                  <div class="row">
                    <div class="col ">
                      <div class="row align-items-center">
                        <div class="col-4">
                          <i
                            class="fa fa-calendar"
                            style={{ fontSize: "25px", color: "#652295" }}
                          ></i>
                        </div>
                        <div class="col-8">
                          <p
                            style={{ fontSize: "12px" }}
                            class="m-0 p-0 fw-bold"
                          >
                            Jan 26,2021
                          </p>
                          <p style={{ fontSize: "12px" }} class="m-0 p-0">
                            02:00 PM - 02:15 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CONSULTATION FEE */}
                    <div class="col ">
                      <div class="row align-items-center">
                        <div class="col-4">
                          <i
                            class="fa fa-newspaper"
                            style={{ fontSize: "25px", color: "#652295" }}
                          ></i>
                        </div>
                        <div class="col-8">
                          <p
                            style={{ fontSize: "12px" }}
                            class="m-0 p-0 fw-bold"
                          >
                            200 INR
                          </p>
                          <p style={{ fontSize: "12px" }} class="m-0 p-0">
                            Consultation Fee
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <RightForm />
        </div>
      </div>
    </div>
  );
};

export default Booking;

const RightForm = () => {
  return (
    <div class="col-6 shadow rounded-3 ">
      <div className="p-3">
        <form>
          <h3 style={{ color: "#652295", fontWeight: "bold" }}>
            Confirm your Appointment
          </h3>
          <div>
            <label>
              <span style={{ fontWeight: "bold" }}>Existing User? </span>
              <Link className="text-primary">LOGIN</Link>
            </label>
          </div>

          {/* PATIENT/VISITOR NAME */}
          <div class="mt-3">
            <label style={{ fontWeight: "bold" }} for="patientName">
              Patient / Visitor's Name
            </label>
            <input type="text" class="form-control" id="patientName" />
          </div>

          {/* EMAIL ID */}
          <div class="mt-3">
            <label style={{ fontWeight: "bold" }} for="emailId">
              Email ID
            </label>
            <input type="email" class="form-control" id="emailId" />
          </div>

          {/* MOBILE NUMBER */}
          <div class="mt-3">
            <label style={{ fontWeight: "bold" }} for="mobileNumber">
              Mobile Number
            </label>
            <input type="number" class="form-control" id="mobileNumber" />

            <small id="emailHelp" class="form-text text-muted">
              You will receive an SMS with a verification code on this number.
            </small>
          </div>

          {/* CHECKBOX */}
          <div class="form-check mt-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              By booking this appointment,you agree to DOCAPP Terms & Conditions
            </label>
          </div>

          <button class="btn btn-primary mt-2 " type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
