import React from "react";
import { Link } from "react-router-dom";

const RightForm = (props) => {
  return (
    <div class="col-6 shadow rounded-3 ">
      <div className="p-3">
        <form>
          <h3 style={{ color: "#095A99", fontWeight: "bold" }}>
            {props.title}
          </h3>
          <div>
            <label>
              <span style={{ fontWeight: "bold" }}>Existing User? </span>
              <Link to="/signup" className="text-primary">
                LOGIN
              </Link>
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
export default RightForm;
