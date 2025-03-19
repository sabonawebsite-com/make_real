
import React from 'react';
import theme from './theme_pattern.svg';
import servicesData from './services_data'; 
import arrow from './arrow_icon.svg';
import './Services.css';

const Services = () => {
  return (
    <div className="services" id='service'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme} alt="Services theme pattern" />
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-read-more">
              <p>Read more</p>
              <details>
                <a href="https://sabonawebsite-com.github.io/code-web/"><p>click here</p></a>
              </details>
             <a href="https://www.linkedin.com/in/sabona-marara-113b4b2b8/"><img src={arrow} alt="Read More arrow" /> </a> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
