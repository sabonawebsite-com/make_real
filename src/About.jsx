import React from 'react'
import './About.css'
import them from './theme_pattern.svg'
import about from './mypro1.png'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img className='myImage' src={them} alt="" />
      </div>
      <div className="about-section">
        <div className="aboutleft">
            <img src={about} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
<p>Creative software developer with a passion for
   building innovative applications and solutions.
    Skilled in various programming languages and frameworks,
     I thrive on tackling complex challenges and delivering 
     user-friendly experiences. Let's bring your ideas to life!
     </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"> <p>REACT JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"> <p>PYTHON</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"> <p>JAVA_SCRIPT</p><hr style={{width:"60%"}}/></div> 
                <div className="about-skill"> <p>Flask</p><hr style={{width:"60%"}}/></div> 
                <div className="about-skill"> <p>Panda-python</p><hr style={{width:"30%"}}/></div> 
                <div className="about-skill"> <p>JAVA</p><hr style={{width:"20%"}}/></div> 
                <div className="about-skill"> <p>C++</p><hr style={{width:"20%"}}/></div> 
                <div className="about-skill"> <p>PHP</p><hr style={{width:"10%"}}/></div> 
                <div className="about-skill"> <p>Github</p><hr style={{width:"50%"}}/></div> 
                <div className="about-skill"> <p>Mongodb</p><hr style={{width:"50%"}}/></div> 
                
            </div>
        </div>
      </div>
      <div className="about-acheviements">
        <div className="about-acheviment">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-acheviment">
            <h1>15+</h1>
            <p>PROJECT COMPLETE</p>
        </div>
        <hr />
        <div className="about-acheviment">
            <h1>1+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
        <hr />
      </div>
    </div>
  )
}
export default About
