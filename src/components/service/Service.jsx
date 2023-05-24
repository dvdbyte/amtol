import React from 'react'
import './service.css'
import logistic from '../../assets/truck.jpg'
import fish from '../../assets/fish.jpg'
import catering from '../../assets/amtol-catering.jpg'

const Service = () => {
  return (
    <div className="service">
      <div className="service-container">
      <h1 className="service-heading">Services</h1>
        <div className="service-wrapper">
            <div className="service-card">
              <div className="service-image">
                <img src={logistic} alt="logistic-image"/>
              </div>
              <h2 className="card-heading">
                Logistics & Haulage
              </h2>
              <p className="card-text">Text goes here</p>
              <p><a className="card-link">Learn More..</a></p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src={fish} alt="cat-fish-image"/>
              </div>
              <h2 className="card-heading">
                Fish Processing
              </h2>
              <p className="card-text">Text goes here</p>
              <p><a className="card-link">Learn More</a></p>
            </div>
            <div className="service-card">
              <div className="service-image">
                <img src={catering} alt="lcatering-image"/>
              </div>
              <h2 className="card-heading">
                Catering Service
              </h2>
              <p className="card-text">Text goes here</p>
              <p><a className="card-link">Learn More</a></p>
            </div>
          </div>
      </div>
      <div className="contact-cta">
            <button className='btn-primary'>
                Get in Touch
            </button>
        </div>
    </div>
  )
}

export default Service