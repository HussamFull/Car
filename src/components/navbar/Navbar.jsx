import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <>
      <header id="header" className="fixed-top header-scrolled"> 
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <Link to={"/"}> 
<img src="/assets/img/utg-logo.png" alt="UTG Logo" className="img-fluid"
 //style={{ width: '100px', height: 'auto' }}
  />

</Link>
          </h1>
          <nav id="navbar" className={`navbar order-last order-lg-0 ${mobileNavActive ? 'navbar-mobile' : ''}`}>
            <ul>
              <li><Link to={""} className="nav-link scrollto active" href="#hero">Home</Link></li>
              <li><Link to={"About"} className="nav-link scrollto" href="#about">About</Link></li>

             <ul>
  <li class="nav-item dropdown">
    <Link to="/Services" class="nav-link dropdown-toggle" href="#services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Services
    </Link>
    <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
      <li><Link to="/Apartment" class="dropdown-item" href="#apartment">Apartment</Link></li>
      <li><Link to="/Car" class="dropdown-item" href="#car">Car</Link></li>
    </ul>
  </li>
</ul>

              <li>
    
    
                <Link to={"Portfolio"} className="nav-link scrollto" href="#portfolio">Portfolio</Link>
              </li>
              <li><Link to={"Team"} className="nav-link scrollto" href="#team">Team</Link></li>
              <li><Link to={"Contact"} className="nav-link scrollto" href="#contact">Contact</Link></li>
            </ul>
            <i 
              className={`bi bi-list mobile-nav-toggle ${mobileNavActive ? 'bi-x' : ''}`}
              onClick={handleMobileNavToggle}
            />
          </nav>
          <a href="https://wa.me/qr/UD7U74XZS6PXN1" className="get-started-btn scrollto">Kontaktieren Sie uns</a>
        

        </div>
      </header>
    </>
  );
}


