import React, { useRef, useState } from 'react';  
import './Navbar.css';  

import AnchorLink from 'react-anchor-link-smooth-scroll';  
import menuOpenIcon from './menu_open.svg';  
import menuCloseIcon from './menu_close.svg';  
import underline from './nav_underline.svg'; // Ensure you have this image imported  

const Navbar = () => {  
  const [activeMenu, setActiveMenu] = useState('home');  
  const menuRef = useRef();  
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility  

  const toggleMenu = () => {  
    setMenuOpen((prev) => !prev);  
    menuRef.current.style.right = menuOpen ? '-350px' : '0';  
  };  

  return (  
    <div className='navbar'>  
      <button className='navbar-brand'>Sabo</button>  
      <ul ref={menuRef} className="nav-menu">  
        <img src={menuCloseIcon} onClick={toggleMenu} alt="Close menu" className='nav-mob-close' />  
        {['home', 'about', 'service', 'mywork', 'contact'].map((item) => (  
          <li key={item}>  
            <AnchorLink className='anchor-link' href={`#${item}`} offset={50}>  
              <p onClick={() => {   
                setActiveMenu(item);   
                if (menuOpen) toggleMenu();   
              }}>  
                {item.charAt(0).toUpperCase() + item.slice(1)}  
              </p>  
            </AnchorLink>  
            {activeMenu === item && <img src={underline} alt={item} />}  
          </li>  
        ))}  
      </ul>  
      <div className="connect">  
        <AnchorLink className='anchor-link' href='#contact'>Connect with Me</AnchorLink>  
      </div>  
      <img   
        src={menuOpen ? menuCloseIcon : menuOpenIcon}   
        onClick={toggleMenu}   
        alt="Toggle menu"   
        className='menu-toggle'   
      />  
    </div>  
  );  
};  

export default Navbar;  