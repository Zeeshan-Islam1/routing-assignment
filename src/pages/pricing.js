import React from 'react';
import './Pricing.css'; 
export const Pricing = () => {
    return (
        <div className="pricing-container">
          <div className="container">
            <h2 className="pricing-header">Choose Your Plan</h2>
            <h1>Bape Pricing</h1>
            <p className="pricing-subheader">We offer affordable pricing for everyone!</p>
            
            <div className="pricing-grid">
              
              {}
              <div className="pricing-card">
                <h3 className="pricing-title">Basic</h3>
                <p className="pricing-price">$10/month</p>
                <ul className="pricing-features">
                  <li>1 Website</li>
                  <li>Basic Support</li>
                  <li>5 GB Storage</li>
                </ul>
                <button className="pricing-button">Get Started</button>
              </div>
              
              {}
              <div className="pricing-card">
                <h3 className="pricing-title">Standard</h3>
                <p className="pricing-price">$25/month</p>
                <ul className="pricing-features">
                  <li>5 Websites</li>
                  <li>Priority Support</li>
                  <li>20 GB Storage</li>
                </ul>
                <button className="pricing-button">Get Started</button>
              </div>
    
              {}
              <div className="pricing-card">
                <h3 className="pricing-title">Premium</h3>
                <p className="pricing-price">$50/month</p>
                <ul className="pricing-features">
                  <li>Unlimited Websites</li>
                  <li>24/7 Support</li>
                  <li>Unlimited Storage</li>
                </ul>
                <button className="pricing-button">Get Started</button>
              </div>
              
            </div>
          </div>
        </div>
      );
};