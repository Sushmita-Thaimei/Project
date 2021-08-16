import React from 'react'
import styled  from 'styled-components';
import searchLogo from './images/searchLogo.png';
import clickLogo from './images/clickLogo.jpg';
import bookLogo from './images/bookLogo.png';

function Header() {
    return (
        <section className="section bg-light">
            <div className="container">
                <div className="row mt-4">
                    <h4 className="d-flex justify-content-center">HOW TO BOOK YOUR APPOINTMENT</h4>
                    <div className="col d-flex justify-content-center mt-4">
                    <img src={searchLogo} height={40} width={40} /> 
                        <p> Search   <br />
                            By Location, Specialities, Insurance, <br />
                            Doctors, Clinics, Hospital etc..</p>
                    </div>
                    <div className="col d-flex justify-content-center mt-4">
                    <img src={clickLogo} height={40} width={40} /> 
                        <p>Select <br />
                            Select based on Reviews, Nationality, <br />
                            Doctors, Clinics, Hospital etc..</p>
                    </div>
                    <div className="col d-flex justify-content-center mt-4">
                    <img src={bookLogo} height={40} width={40} /> 
                        <p>Book <br />
                            Book your appointment and pay at the <br />
                            Clinic/Hospital</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Header;





