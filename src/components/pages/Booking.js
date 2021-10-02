import React from "react";
import { useHistory } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import RightForm from "./Rightform";
import image from "../images/doctor.webp";

const Booking = (props) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <nav style={{ padding: "8px" }}>
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowLeft color="white" size="2rem" />
          <span style={{ color: "white" }}>Back to my result</span>
        </span>
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
                      src={image}
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
                      <p class="m-0 mt-3 p-0 fw-bold fs-6">
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
                            style={{ fontSize: "20px", color: "#095A99" }}
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
                            style={{ fontSize: "20px", color: "#095A99" }}
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
                            style={{ fontSize: "20px", color: "#095A99" }}
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
                            style={{ fontSize: "25px", color: "#095A99" }}
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
                            style={{ fontSize: "25px", color: "#095A99" }}
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
          <RightForm title="Confirm your appointment" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
