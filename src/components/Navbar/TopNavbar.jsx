import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


export default function TopNavbar() {
  return (
    <header className="top-navbar">
      <div className="navigation-container">
       
        <div className="nav-brand">
    
         <img src="/Images/logo77.png" alt="Site Logo" style={{ width: "90px" }} />
        </div>

       
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/experince">Resume</Link></li>
            <li><Link to="/view-portfolio">Portfolio</Link></li>
            <li><Link to="/testimonials">Testimonial</Link></li>
            <li><Link to="/view-blog">Blog</Link></li>
            <li><Link to="/contact"className="contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
