import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-container'>
        <div className='footer-service-wrapper'>
          <h3>What we do</h3>
          <div className="footer-service">
          <p><a href="">Haulage & Logistics</a></p>
          <p><a href="">Fish Processing</a></p>
          <p><a href="">Caterig Service</a></p>
          </div>
        </div>
        <div className="footer-links">
          <p><a href="">About Us</a></p>
          <p><a href="">Mission</a></p>
          <p><a href="">Vision</a></p>
          <p><a href="">Our Team</a></p>
          <p><a href="">Contact Us</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer