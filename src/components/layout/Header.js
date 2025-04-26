import "../layout/navbar.css"
import icon from "../../pages/images/icon-logo.png"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
export const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div>
  <nav className="navbar">
      <div className="logo" style={{ fontSize: "1.8rem", fontWeight: "bold", color: "rgb(255, 255, 255)" }}>
  <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
    Official BAPE.
    <img 
      src={icon} 
      style={{ width: "50px", height: "50px", backgroundColor: "#64ffda", borderRadius: "50%", marginLeft: "10px" }} 
      alt="Logo" 
    />
  </a>
</div>
      <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/pricing">Pricing</Link></li>
  <li><Link to="/carres">Carrier</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/login">Login</Link></li>
  <li><Link to="/privacy">Privacy</Link></li>



</ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
        </div>
    );
};