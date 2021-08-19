import React from "react";
import img1 from "./images/man.jpg";
import img2 from "./images/pic3.jpg";

function Body() {
  return (
    <section className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h4 className="main-heading text-center">
              AFFORDABLE FULL CHECKUPS
            </h4>
          </div>
          <div className="col-md-6 text-center">
            <img src={img1} height={400} width={600} />
          </div>
          <div className="col-md-6 mt-4 text-center text-dark">
            <p>
              To serve our community with passion <br />
              and profession. Vision to be <br /> a leading world class,
              integrated and <br />
              comprehension healthcare provider.
            </p>
          </div>
        </div>
        <br />
        <div className="row d-flex justify-content-right">
          <div className="col-6 ">
            <img src={img2} height={400} width={500} />
          </div>
          <div className="col-6 d-flex justify-content-center">
            <p>
              To save our community with passion and profesionalism.
              <br />
              Vision to be a leading world class,
              <br />
              integrated and comprehensive healthcare provider.
            </p>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}

export default Body;
