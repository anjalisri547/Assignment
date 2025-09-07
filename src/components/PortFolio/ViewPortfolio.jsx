import React, { useState } from "react";

import "./portfolio.css";

import CTASection from "../CTASection/CTASection";
export default function ViewPortfolio() {
  const allImages = [
    "https://www.shutterstock.com/image-photo/programmer-people-working-laptops-smartphones-600nw-2473384115.jpg",
    "https://www.shutterstock.com/image-photo/artificial-intelligence-content-generator-man-600nw-2471042165.jpg",
    "https://t3.ftcdn.net/jpg/03/48/39/74/360_F_348397404_wXuf22GUPNAh67htBZZnaDSx3Bj92yep.jpg",
    "https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.jpg?s=612x612&w=0&k=20&c=o8Ci6F_YCWFlKE2Yr6A2wbDvrZRwSB3YssLakLkrFBo=",
    "https://media.istockphoto.com/id/1058262630/vector/creation-responsive-internet-website-for-multiple-platforms-building-mobile-interface-on.jpg?s=612x612&w=0&k=20&c=BwGASPtAVnQu9_l-g7R-jW9gRxCQsmSMtRsA-jDPQz0=",
    "https://thumbs.dreamstime.com/b/software-development-business-process-automation-internet-technology-concept-virtual-screen-software-development-143587196.jpg",
    "https://www.shutterstock.com/image-photo/software-engineer-development-concepts-programming-260nw-2485654259.jpg",
  ];

  const [visible, setVisible] = useState(6);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="portfolio">
      <div className="subtitle-Port">
        <img src="/Images/g.png" alt="Designer" className="subtitle-PORT" />
        <h4 className="section-subtitle-portfolio">My Portfolio</h4>
      </div>

      <h2 className="section-title-portfolio">Visit My Portfolio</h2>

      <div className="masonry-grid">
        {allImages.slice(0, visible).map((img, idx) => (
          <div key={idx} className="masonry-item">
            <img src={img} alt={`Project ${idx + 1}`} />
          </div>
        ))}
      </div>

      {visible < allImages.length && (
        <button className="load-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
      <CTASection/>
    </div>
  );
}
