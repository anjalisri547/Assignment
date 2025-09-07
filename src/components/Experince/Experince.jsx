import React from "react";
import "./Experince.css";

function Experince() {
  return (
    <div className="resume">
      <div className="resume-header">
          <div className="subtitle-Port">
        <img src="/Images/g.png" alt="Designer" className="subtitle-PORT" />
        <p className="resume-subtitle">My Resume</p></div>
        <h2 className="resume-title">10+ YEARS OF EXPERIENCE</h2>
      </div>

      <div className="resume-content">
       
        <div className="resume-timeline">
          <div className="timeline-item">Education</div>
          <div className="timeline-item">Software Skills</div>
          <div className="timeline-item">Experience</div>
        </div>

   
        <div className="resume-details">

        
          <div className="resume-row">
            <div className="resume-card">
              <h4>BSc in Computer Science</h4>
              <p className="place">University of ULAV (2018 - 2022)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div className="resume-card">
              <h4>AS - Science & Information</h4>
              <p className="place">University of ULAV (2016 - 2018)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div className="resume-card">
              <h4>Secondary School Education</h4>
              <p className="place">Kindergarten (2006 - 2016)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
          </div>

        
          <div className="resume-row">
            <div className="resume-card">
              <h4>UI/UX Design</h4>
              <p>Figma <span>90%</span></p>
              <p>Adobe XD <span>85%</span></p>
              <p>Photoshop <span>80%</span></p>
            </div>
            <div className="resume-card">
              <h4>Web Developer</h4>
              <p>WordPress <span>90%</span></p>
              <p>Mockplus <span>85%</span></p>
              <p>Weebly <span>80%</span></p>
            </div>
            <div className="resume-card">
              <h4>App Development</h4>
              <p>Quixy <span>92%</span></p>
              <p>AppyPie <span>87%</span></p>
              <p>iBuildApp <span>82%</span></p>
            </div>
          </div>

       
          <div className="resume-row">
            <div className="resume-card">
              <h4>Web Developer & Trainer</h4>
              <p className="place">Brac Developer Team (2012 - 2016)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div className="resume-card">
              <h4>Front-end Developer</h4>
              <p className="place">Brane (2020 - 2011)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
            <div className="resume-card">
              <h4>UI/UX Designer</h4>
              <p className="place">Google Out Tech (2017 - Present)</p>
              <p>Pomnis voluptas assumenda est, omnis dolor repellendus.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experince;
