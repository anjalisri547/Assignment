
import React, { useState, useEffect } from "react";
import "./Partner.css";

const partnerLogos = [
  { id: 1, name: "Brainstorm", img: "/Images/Logo.png" },
  { id: 2, name: "Astra", img: "/Images/Logo (1).png" },
  { id: 3, name: "Wellness", img: "/Images/Logo (2).png" },
  { id: 4, name: "Flower", img: "/Images/Logo (3).png" },
  { id: 5, name: "Apple Sign", img: "/Images/Logo (4).png" },
  { id: 6, name: "Brainstorm 2", img: "/Images/Logo.png" },
];

export default function Partners() {

  const [index, setIndex] = useState(0);


  const totalSlides = Math.ceil(partnerLogos.length / 6);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);


  const start = index * 6;
  const end = start + 6;
  let finalLogos = partnerLogos.slice(start, end);

  
  if (finalLogos.length < 6) {
    finalLogos = [
      ...finalLogos,
      ...partnerLogos.slice(0, 6 - finalLogos.length),
    ];
  }

  return (
    <div className="partners">
      <div className="subtitle-part">
        <img src="/Images/g.png" alt="Designer" className="subpart-img" />
        <h4 className="section-subtitle-partner">Partners</h4>
      </div>

      <h2 className="section-title-partner">REPUTED PARTNER</h2>

      <div className="partners-List">
        {finalLogos.map((logo) => (
          <div key={logo.id} className="partner-card">
            <img src={logo.img} alt={logo.name} />
          </div>
        ))}
      </div>

    
      <div className="carousel-indicators">
        {[0, 1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`dot-line ${index === dot ? "active" : ""}`}
            onClick={() => setIndex(dot)}
          />
        ))}
      </div>
    </div>
  );
}
