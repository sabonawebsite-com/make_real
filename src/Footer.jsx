import React, { useState } from 'react'
import './Footer.css'
import logo_footer from './sabo.png'
import user from './user_icon.svg'
const Footer = () => {
  
 const[comment,setComment]=useState("")
 const handelComment=(e)=>{
  setComment(e.target.value)
 }
  const doPost =()=>{
    document.querySelector(".post").innerHTML=comment
  }
  const[sub,setSub]=useState("")

  return (
    <div className='footer' id='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
           <img src={logo_footer} alt="" />
           <p>you can contact with me by following platform</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user} alt="" />
               
                
                <input  type="email" placeholder='Enter Your Email' />
                
            </div>
            
            <div className="footer-subscribe" ><p onClick={()=>setSub('subscribed')}>subscribe</p>{sub==="subscribed"?<h3>subscrition is added</h3>:<></>}</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy;2024Sabona Marara All Right Resived</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
