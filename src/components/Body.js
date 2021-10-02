import React from "react";
import img1 from "./images/man.jpg";
import img2 from "./images/pic3.jpg";

function Body() {
  return (
    <section className="section">
      <h4 className="text-center text-primary mt-4">
        HOW TO BOOK YOUR APPOINTMENT
      </h4>
      {/* FIRST */}
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="row mb-3">
              <div className="col-8">
                <i className="d-flex justify-content-start">
                  <img src={img1} height={400} width={600} />
                </i>
              </div>
              <div className="col-md-4">
                <h4 className="text-primary">DENTAL CARE</h4>
                <p>
                  To serve our community with passion <br />
                  and profession. Vision to be <br /> a leading world class,
                  integrated and <br />
                  comprehension healthcare provider.
                </p>
              </div>
            </div>
          </div>
          {/* SECOND */}
          <div className="col mb-3">
            <div className="row">
              <div className="col-md-4">
                <h4 className="text-primary">EYE CARE</h4>
                <p>
                  To save our community with passion and profesionalism.
                  <br />
                  Vision to be a leading world class,
                  <br />
                  integrated and comprehensive healthcare provider.
                </p>
              </div>
              <div className="col-8">
                <i className="d-flex justify-content-start">
                  <img src={img2} height={300} width={600} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
