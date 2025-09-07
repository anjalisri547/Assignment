import React from "react";
import './Service.css';

const services = [
  { id: 1, title: "UI/UX Design", desc: "Hen our power of choice is untrammelled and when nothing prevents our being able", img: "/Images/Icon.jpg" },
  { id: 2, title: "Mobile App", desc: "Hen our power of choice is untrammelled and when nothing prevents our being able", img: "/Images/icon20.png" },
  { id: 3, title: "Graphic Design", desc: "Hen our power of choice is untrammelled and when nothing prevents our being able", img: "/Images/Icon6.png" },
  { id: 4, title: "Web Developer", desc: "Hen our power of choice is untrammelled and when nothing prevents our being able", img: "/Images/Icon5.png" },
  { id: 5, title: "SEO Optimization", desc: "Hen our power of choice is untrammelled and when nothing prevents our being able", img: "/Images/Icon3.png" },
  { id: 6, title: "WordPress Developer", desc: "Hen our power of choice is untrammelled and when nothing prevents our being able", img: "/Images/icon34.png" },
  { id: 7, title: "App Development", desc: "Hen our power of choice is untrammelled and when nothing prevents our being able", img: "/Images/Icon5.png" },
  { id: 8, title: "Business Strategy", desc: "Hen our power of choice is untrammelled and when nothing prevents our being able", img: "/Images/Icon1.png" },
];

export default function Service() {
  return (
    <div class="Servicebody">
   
      <div className="subtitle-Service">
      <img src="/Images/g.png" alt="Designer" className="subService-img" />
      <h4 className="section-service">My Service</h4></div>
      <h2 className="section-title-service">SERVICES I OFFER</h2>

      <div className="services-List">
        {services.map((srv) => (
          <div key={srv.id} className="service-card">
            <img src={srv.img} alt={srv.title} className="service-img" />
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
}
