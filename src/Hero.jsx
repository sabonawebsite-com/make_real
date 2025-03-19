import React from 'react'
import './Hero.css'
import profile from './mypro3.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile} alt="" className='proimg'/>
      <h1><span>I am Sabona Marara</span> frontend Devloper based in Ethiopia</h1>
      <h1><span>BalTech</span></h1>
      <p>I have exprice 1 years work freelance </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50}href='#contact'>connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
