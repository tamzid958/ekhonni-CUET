import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="row bg-dark p-5">
      <div className="col-md-3 col-sm-6">
        <div className="footer-section">
        <Link href="/" style={{fontFamily:'revert' ,fontSize:'20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            Ekhoni
            <div style={{ fontSize: '14px', color: 'lightgray' }}>
              Buy and Sell Anything
            </div>
          </Link>

          <div style={{ marginTop: '10px',textAlign:'center',fontSize:'30px' }}>
              <a
                href="https://www.facebook.com/etaminhaj?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '10px', color: 'lightgray' }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/your-youtube-channel-url"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '10px', color: 'lightgray' }}
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com/eta_minhaj?igshid=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'lightgray' }}
              >
                <FaInstagram />
              </a>
            </div>

        </div>
      </div>

      <div className="col-md-3 col-sm-6">
        <div className="footer-section">
          <h2 className='text-white'>Contact Us</h2>
            <p className='text-white address'> House #8, Road # 14,
            Dhanmondi, Dhaka-1209.
            Email: support@ekhoni.com</p>
            
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="footer-section">
          <h2 className='text-white'>Company</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
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
