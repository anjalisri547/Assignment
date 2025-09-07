import React from "react";
import './About.css';

export default function About() {
  return (
    <div className="BodyAbout">
  
      <div className="about-wrapper">
        <div className="about-card">
            <div className="about-body">
            </div>
        </div>
       
        <div className="about-card">
          <div className="about-content">
            <div className="subtitle-wrap">
              <img src="/Images/g.png" alt="Designer" className="subtitle-img" />
            <h4 className="section-subtitle-ABOUT">About Me</h4></div>
            <h2 className="section-title-about">I Can Design Anything You Want</h2>
            <p className="about-text-about">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus. Temporibus autem
              quibusdam et aut officiis.
            </p>

            <div className="about-stats">
            <div className="stat-card">
    <img src="/Images/clock.png" alt="Project Icon" className="stat-icon" />
    <div>
      <h3>350+</h3>
      <p>Complete Project</p>
    </div>
  </div>

  <div className="stat-card">
    <img src="/Images/n1.png" alt="Experience Icon" className="stat-icon" />
    <div>
      <h3>16+</h3>
      <p>Year of Experience</p>
    </div>
  </div>
    </div>

          
            <ul className="about-list">
  <li><img src="/Images/check.png" alt="Check" className="li-icon" /> Work simple and clean design</li>
  <li><img src="/Images/check.png" alt="Check" className="li-icon" /> New idea and user friendly design</li>
  <li><img src="/Images/check.png" alt="Check" className="li-icon" /> Web Design Full stack</li>
  <li><img src="/Images/check.png" alt="Check" className="li-icon" /> Unlimited Revisions</li>
</ul>


            
            <button 
  className="cv-btn"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; 
    link.download = "My-CV.pdf"; 
    link.click();
  }}
>
  Download My CV
</button>

          </div>
        </div>
      </div>
    
    </div>
  );
}
