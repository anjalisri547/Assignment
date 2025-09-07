import React from 'react';
import './content1.css';
export default function Content(){
    return(
        <div class="body-content">
            <div className='container'>
                <div className='content-wrapper'>
                    <div className='content-card'>
                        <div className='class-content'>
                            <div className="subtitle-wrap">
                             <img src="/Images/g.png" alt="Designer" className="subtitle-img" />
                            <h4 className='subtitle-content'>I am Designer</h4></div>
                            <h2 className='title'>Creative design And Solutions</h2>
                            <p class="text">Nam libero tempore, cum soluta nobis est eligendi optio
                               cumque nihil impedit quo minus id quod maxime placeat facere
                                possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                 Temporibus autem quibusdam et.
                                 Download My CV
                            </p>
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
              
                 <div className="content-card">
  <div className="card-body">
    
    <p>
      
    </p>
  </div>
</div>

            </div>
        </div>
    )
}