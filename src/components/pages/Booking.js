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
        <div class="row gx-5">
          <div class="col-6">
            <div class="p-3 border bg-light">Custom column padding</div>
          </div>
          <div class="col-6">
            <div className="p-3 border bg-light">
              <form>
                <h>Confirm your booking</h>
                <div>
                  <label>
                    Existing User? <Link className="text-primary">LOGIN</Link>
                  </label>
                  <input className="form-control"></input>
                </div>
                <div>
                  <label>Patient / Visitor's Name</label>
                  <input className="form-control"></input>
                </div>
                <div>
                  <label>Email ID</label>
                  <input className="form-control"></input>
                </div>
                <div>
                  <label>Mobile No.</label>
                  <input className="no-border"></input>
                </div>
                <div>
                  <label>
                    You will receive an SMS with a verification code on this
                    number.
                  </label>
                </div>
                <div class="form-check mt-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  ></input>
                  <label class="form-check-label" for="defaultCheck1">
                    By booking this appointment,you agree to DOCAPP Terms &
                    Conditions
                  </label>
                </div>
                <button class="btn btn-primary " type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

{
  /*<div className="p-3 border bg-light">
<ul className="list-unstyled">
  <h className="text-primary">Confirm your appointment</h>
  <li>
    Existing User? <t />
    <Link className="text-info">LOGIN</Link> <br />
    <input className="input" type="text" />
  </li>
</ul>
</div> */
}
