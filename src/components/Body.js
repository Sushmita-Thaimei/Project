import React from 'react'
import img1 from './images/man.jpg';
import img2 from './images/pic3.jpg';


function Body() {
    return (
        <section >  
            <div className="container"> 
            <div className="row">
                <div className="col-md-12 mb-4 text-center">
                    <h4 className="main-heading text-center">AFFORDABLE FULL CHECKUPS</h4>
                </div>
                <div className="col-md-6 text-center">
                    <img src={img1} height={400} width={600} />
                </div>
                <div className="col-md-6 mt-4 text-center text-dark">
                    <p>To serve our community with passion <br />
                    and profession. Vision to be  <br /> a leading world class, integrated and <br />
                    comprehension healthcare provider.</p>
                </div>
            </div>
            <br />
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-left">
                    <img src={img2} height={400} width={500} />
                </div>
                <div className="col d-flex justify-content-center">

                </div>
            </div>
            </div>
        </section>
    )
}

export default Body
