import React from 'react'
import './Contact.css'
import theme from './theme_pattern.svg';
import logo from './pro-logo.png'
import call from './call_icon.svg';
import location from './location_icon.svg';
import mail from './mail_icon.svg';
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fb157278-c020-42dd-bd36-1f503b4fd21b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
       
        <h1>Get in Touch</h1>
        
        <img src={theme}alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-section-left">
        <img className='image-logo' src={logo} alt="" />
            <h1>Let Talk</h1>
            <p>you can talk with me by platform you like </p>
            <div className="contact-details">
            <div className='contact-detail'>
                <img src={mail} alt="" /><p>sabonamarara53@gmail.com</p>
            </div>
            <div className='contact-detail'>
            <img src={call} alt="" /><p>0928629040</p>
            </div>
            <div className='contact-detail'>
            <img src={location} alt="" /><p>Yabello Ethiopia</p>
            </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
        <label htmlFor="">Your Name</label>
        <input type="text" name='name' placeholder='Your Name' />
        <label htmlFor="">Your Email</label>
        <input type="email" name='email' placeholder='Your Email' />
        <label htmlFor="">Write message</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button className='contact-sumbit' type='submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
