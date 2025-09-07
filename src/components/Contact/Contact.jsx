import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-container">
      <div className="header">
         <div className="subtitle-Port">
        <img src="/Images/g.png" alt="Designer" className="subtitle-PORT" />
        <p className="contact-subtitle">My Contact</p></div>
        <h2 className="contact-title">I WANT TO HEAR FROM YOU</h2>
      </div>

      <div className="contactwrapper">
       
        <form className="contactForm">
          <div className="form-row">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Your phone" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send Me Message</button>
        </form>

     
        <div className="contact-information">
          <div className="info-itemlist">
            <img src="/Images/location.png" alt="location" />
            <div>
              <h4>Address</h4>
              <p>202 Dog Hill Lane, Beloit, KS 67420</p>
            </div>
          </div>

          <div className="info-itemlist">
            <img src="/Images/phone.png" alt="phone" />
            <div>
              <h4>Phone</h4>
              <p>+01589634755</p>
            </div>
          </div>

          <div className="info-itemlist">
            <img src="/Images/Email.png" alt="email" />
            <div>
              <h4>Email</h4>
              <p>credesign@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
