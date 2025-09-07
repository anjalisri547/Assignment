import React, { useState } from "react";
import "./Testimonials.css";

const feedbacks = [
  {
    id: 1,
    name: "John K. Meraz",
    role: "CTO, YP Group",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: 2,
    name: "Johan Smith",
    role: "CEO, Alex Agency",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: 3,
    name: "Robert E. Wolf",
    role: "Director, Techno",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.",
  },
  {
    id: 4,
    name: "Emily Clark",
    role: "Manager, SoftTech",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    name: "Michael Lee",
    role: "Founder, InnovateX",
    text: "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 6,
    name: "Sophia Turner",
    role: "Designer, Artify",
    text: "Many desktop publishing packages and web page editors now use Lorem Ipsum.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  
  const totalSlides = 3; 


  return (
    <>
      <div className="subtitle-Testi">
        <img src="/Images/g.png" alt="Designer" className="subTesti-img" />
        <h4 className="section-subtitle-testimonial">Testimonial</h4>
      </div>
      <h2 className="section-title-testimonial">Client Feedback</h2>

     
      <div className="testimonials-carousel">
        <div
          className="testimonialslist"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {feedbacks.map((fb) => (
            <div key={fb.id} className="testimonial">
              <div className="avatar"></div>
              <h3>{fb.name}</h3>
              <p className="role">{fb.role}</p>
              <p className="feedback-text">“{fb.text}”</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </>
  );
}
