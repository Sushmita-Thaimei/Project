import React from "react";
import styled from "styled-components";
import { MdMyLocation } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

function Headline() {
  return (
    <section style={{ backgroundColor: "#095A99" }}>
      <div className="container">
        <div className="row text-center text-light">
          <div className="col-12">Search and look appointment</div>
        </div>
        <div className="row text-center mt-4 bg-light">
          <div className="col-4">
            Locations
            <MdMyLocation className="" color="lightblue" size="1rem" />
          </div>
          <div className="col-4">
            Select Specialities
            <FaAngleDown className="" size="1rem" />
          </div>
          <div className="col-4">
            Select Insurance
            <FaAngleDown size="1rem" />
          </div>
        </div>
        <div class="d-grid gap-2 col-4 mx-auto mt-4">
          <button class="btn btn-dark" type="button">
            Search
          </button>
        </div>
        <br />
      </div>
    </section>
  );
}

export default Headline;
