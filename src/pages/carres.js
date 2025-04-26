import React from 'react';
import './Careers.css';


export const Carrer = () => {
    return (
        <div className="careers-container">
          <div className="container">
            <h2 className="careers-header">Join Our Team</h2>
            <p className="careers-subheader">Explore exciting career opportunities with us!</p>
    
            <div className="careers-grid">
              
              {}
              <div className="career-card">
                <h3 className="career-title">Frontend Developer</h3>
                <p className="career-description">We are looking for a passionate frontend developer to build amazing user interfaces.</p>
                <button className="career-button">Apply Now</button>
              </div>
              
              {}
              <div className="career-card">
                <h3 className="career-title">Backend Developer</h3>
                <p className="career-description">Join us to develop robust server-side systems and APIs for our applications.</p>
                <button className="career-button">Apply Now</button>
              </div>
    
              {}
              <div className="career-card">
                <h3 className="career-title">UI/UX Designer</h3>
                <p className="career-description">Help us design intuitive and visually stunning user experiences for our products.</p>
                <button className="career-button" > Apply Now</button>
              </div>
    
            </div>
          </div>
        </div>
      );
};