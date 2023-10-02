import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <div className="row bg-dark p-5">
            <div className="col-md-4 col-sm-6">
              <div className="footer-section">
                <h2 className='text-white'>Support</h2>
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Advisories</a></li>
                  <li><a href="#">Status</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="footer-section">
                <h2 className='text-white'>Company</h2>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Press</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="footer-section">
                <h2 className='text-white'>Terms & Conditions</h2>
                <ul>
                  <li><a href="#">Policies</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Code of Conduct</a></li>
                  <li><a href="#">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
  );
};

export default Footer;
