import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <h2 className="about-heading">About Us</h2>
      <div className="about-container">
            <div className="about-left">
           <div className="about-image">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat unde ratione amet, molestias magnam eligendi architecto perferendis voluptates porro inventore exercitationem quidem. Quia, corrupti cum eveniet autem expedita natus quod!</p>
           </div>
            </div>
            <div className="about-right">
              <div className="about-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet explicabo a temporibus, itaque animi recusandae molestiae modi voluptates hic aut non aliquam quam consequuntur dolores fuga perspiciatis quod consequatur fugit!</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About