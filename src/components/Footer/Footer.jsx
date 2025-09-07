import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-container">

       
        <div className="col brand-col">
          <img src="/Images/logo77.png" alt="Site Logo" className="footer-logo" />
          <p>
            Short text about the company goes here. Mission statement or tagline.
          </p>
          <div className="contact-info">
          
            <a href="mailto:myemail@gmail.com">myemail@gmail.com</a>
          </div>
        

          
        </div>

        
        <div className="col">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

      
        <div className="col">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">My Services</Link></li>
            <li><Link to="/ui-ux">UI / UX</Link></li>
            <li><Link to="/mobile">Mobile Apps</Link></li>
            <li><Link to="/graphics">Graphics</Link></li>
            <li><Link to="/web">Web Development</Link></li>
          </ul>
        </div>

        <div className="col">
          <h3>Follow Me</h3>
         
            <br></br>
        
        <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/Images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/Images/Twitter icon.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/Images/dribbble.png" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/Images/Behance.png" alt="Instagram" />
            </a>
          </div>
          <br></br>
          <div className="contact-info">
            <img src="/Images/phone.png" alt="Phone" className="icon" />
            <a href="tel:+1234567890">+1 234 567 890</a>
          </div>
          <div className="contact-info">
            <img src="/Images/location.png" alt="Location" className="icon" />
            <span>202 Dog Hill Lane, Beloit, KS</span>
          </div>
          </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Credesign. All rights reserved.</p>
        <ul className="bottom-links">
          <li><Link to="/terms">Terms & Conditions</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
