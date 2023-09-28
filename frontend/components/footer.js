import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-section">
                <h2>Support</h2>
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Advisories</a></li>
                  <li><a href="#">Status</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-section">
                <h2>Company</h2>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-section">
                <h2>Terms & Conditions</h2>
                <ul>
                  <li><a href="#">Policies</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Code of Conduct</a></li>
                  <li><a href="#">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
