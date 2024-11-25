import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from "../assets/images/logo/logo2.png";



const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    
    


    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        {/* Header Top Start */}
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to="/login">Log In</Link>
                </div>
            </div>
        </div>

        {/* Header Bottom Start */}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/* Logo */}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={"/"}>
                                <img src={logo2} alt="Logo" width={200} height={150}/>
                            </Link>
                        </div>
                    </div>

                    {/* Menu Area */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>

                        {/* Sign In / Log In */}
                        <Link to="/sign-up" className="me-3 d-none d-md-block" style={{ backgroundColor: '#ffbd59',  /* Green background */color: 'white',  /* White text */padding: '10px 20px', borderRadius: '5px'}}>Create Account</Link>
                        <Link to="/login" className='d-none d-md-block'>Log In</Link>

                        <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>  
                            <span style={{ backgroundColor: '#ffbd59', height: '4px', width: '30px', display: 'block', borderRadius: '2px', margin: '4px 0' }}></span>
                            <span style={{ backgroundColor: '#ffbd59', height: '4px', width: '30px', display: 'block', borderRadius: '2px', margin: '4px 0' }}></span>
                            <span style={{ backgroundColor: '#ffbd59', height: '4px', width: '30px', display: 'block', borderRadius: '2px', margin: '4px 0' }}></span>
                        </div>
                        
                        {/* social toggler */}
                        <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
                            <i className="icofont-info-square" style={{ color: '#ffbd59' }}></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default NavItems;
