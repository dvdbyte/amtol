import React, {useState} from 'react';
import './header.css';
import hero from '../../assets/amtol_hero.jpg'




const Header = () => {
    return (
    <div className="header">
      <div className="hero-container">
          <div className="hero-right">
            <h1>AMTOL OASIS <span>LOGISTICS</span> <span>FISH PROCESSING</span> <span>CATERING</span> </h1>
            <p> 
              We are a one-stop solution provider seeking efficient Logistics, high quality Fish Processing, and top-notch Catering Services 
            </p>
            <div className="button-wrapper">
              <button className='btn-primary'>Learn More</button>
              <button className='btn-secondary'>Contact Us</button>
            </div>
          </div>
          <div className="hero-left">
            <img src={hero} alt="amtol-oasis-image" />
          </div>
        </div>
    </div>
  )
}

export default Header