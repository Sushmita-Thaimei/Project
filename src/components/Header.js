import React from "react";
import { MdMyLocation } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

function Header() {
  return (
    <section style={{ backgroundColor: "#095A99" }}>
      <div className="container-md ">
        <div className="row text-center text-light">
          <div className="col">Search and look appointment</div>
        </div>
        {/* Locations */}
        <div style={{ width: "50rem" }} className="container mt-4 bg-light">
          <div className="row">
            <div className="col-md">
              <div className="row d-flex justify-content-between">
                <div className="col-md-10 mt-1">
                  <p>Locations</p>
                </div>
                <div className="col-md-2">
                  <MdMyLocation color="lightblue" size="1rem" />
                </div>
              </div>
            </div>
            {/* Specialities */}
            <div className="col">
              <div className="row d-flex justify-content-between">
                <div className="col-md-10 mt-1">
                  <p>Select Specialities</p>
                </div>
                <div className="col-md-2">
                  <FaAngleDown size="1rem" />
                </div>
              </div>
            </div>
            {/* Insurance */}
            <div className="col">
              <div className="row d-flex justify-content-between">
                <div className="col-md-10 mt-1">
                  <p>Select Insurance</p>
                </div>
                <div className="col-md-2">
                  <FaAngleDown size="1rem" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 col-4 mx-auto mt-4">
        <button className="btn btn-dark mb-3" type="button">
          Search
        </button>
      </div>
    </section>
  );
}

export default Header;
