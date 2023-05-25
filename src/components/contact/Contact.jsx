import React from 'react'
import './contact.css'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <div className="contact-wrapper">
          <div className="address">
            <h3>Office Address</h3>
            <p>11, Amtol Avenu, Obalende, Ijebu Ode, Ogun State.</p>
            <p><span>Phone:</span> 0812457903</p>
            <div className="social-icons">
              <p><a href=""><AiFillInstagram size={27} color="black" /></a></p>
              <p><a href=""><AiFillFacebook size={27} color="black" /></a></p>
              <p><a href=""><AiFillTwitterSquare size={27} color="black" /></a></p>
              <p><a href=""><AiOutlineWhatsApp size={27} color="black" /></a></p>
            </div>
          </div>
          <form action="#" className="form">
            <input type="text" id="name" placeholder="Your Name"/>
            <input type="email" id="email" placeholder="Your Email Address"/>
            <textarea
              id="message"
              rows={5}
              placeholder='Leave a message here'
            
            />
            <input type="submit" id="submit"/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact