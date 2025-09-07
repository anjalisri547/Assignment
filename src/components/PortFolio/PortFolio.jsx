
import React from "react";

import './portfolio.css';
export default function Portfolio() {
  const projects = [
    { id: 1, img: "https://picsum.photos/300/200?random=1" },
    { id: 2, img: "https://picsum.photos/300/250?random=2" },
    { id: 3, img: "https://t3.ftcdn.net/jpg/03/48/39/74/360_F_348397404_wXuf22GUPNAh67htBZZnaDSx3Bj92yep.jpg" },
    { id: 4, img: "https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.jpg?s=612x612&w=0&k=20&c=o8Ci6F_YCWFlKE2Yr6A2wbDvrZRwSB3YssLakLkrFBo=" },
    { id: 5, img: "https://media.istockphoto.com/id/1058262630/vector/creation-responsive-internet-website-for-multiple-platforms-building-mobile-interface-on.jpg?s=612x612&w=0&k=20&c=BwGASPtAVnQu9_l-g7R-jW9gRxCQsmSMtRsA-jDPQz0=" },
    { id: 6, img: "https://thumbs.dreamstime.com/b/software-development-business-process-automation-internet-technology-concept-virtual-screen-software-development-143587196.jpg" },
    { id: 7, img: "https://www.shutterstock.com/image-photo/software-engineer-development-concepts-programming-260nw-2485654259.jpg" },
  ];

  return (
    <>
      <div className="subtitle-Port">
  <img src="/Images/g.png" alt="Designer" className="subtitle-PORT" />
  <h4>My PortFolio</h4></div>
      <h2 className="section-title-portfolio">Visit My Portfolio</h2>

      <div className="masonry-grid">
        {projects.map((p) => (
          <div key={p.id} className="masonry-item">
            <img src={p.img} alt={`Project ${p.id}`} />
          </div>
        ))}
      </div>
      
    </>
  );
}
