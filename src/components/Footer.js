import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {/* Column 1 */}
            <div className="col-md-2 col-sm-6">
              <h6>DOCAPP</h6>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-2 col-sm-6">
              <h6>SPECIALITIES</h6>
              <ul className="list-unstyled">
                <li>Prosthodontics</li>
                <li>Periodontics</li>
                <li>Endodontics</li>
                <li>Orthondontics</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-2 col-sm-6">
              <ul className="list-unstyled">
                <li>Neurology</li>
                <li>Oncology</li>
                <li>Urology</li>
                <li>Gynocology</li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-2 col-sm-6">
              <ul className="list-unstyled">
                <li>Pediatric</li>
                <li>Maxillofacial</li>
                <li>Psychiatry</li>
                <li>Radiology</li>
              </ul>
            </div>
            {/* Column 5 */}
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>Are you from Clinic or Hospital?</li>
                <li>
                  <Link className="text-light">Register Here</Link>
                </li>
                <br />
                <li>Contact Us</li>
                <Link className="text-light">customercare@docapp.com</Link>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()}DOCAPP |{" "}
              <Link className="text-light">Terms of Use |</Link>
              <Link className="text-light">Privacy Policy </Link>
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background-color: #095a99;
    padding-top: 3rem;
    color: var(--mainWhite);
    font-size: 14px;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;
