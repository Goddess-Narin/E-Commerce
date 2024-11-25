import React from 'react'
import { Link } from 'react-router-dom';
const btnText = "Sign Up for Free!";
const title = "Shop Anytime, Anywhere";
const desc = "Experience seamless shopping across all your devices with our app. Download, install, and start exploring endless options – shop whenever, wherever you want!";


const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
        <div className='section-header text-center'>
            <Link to="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
            <h2 className='title'>{title}</h2>
            <p>{desc}</p>
        </div> 

        <div className='section-wrapper'>
            <ul className='lab-ul'>
                <li><a href='#'><img src="src/assets/images/app/01.jpg" alt="" /></a></li>
                <li><a href='#'><img src="src/assets/images/app/02.jpg" alt="" /></a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default AppSection
