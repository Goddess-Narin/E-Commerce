import React from 'react'
import PageHeader from '../components/PageHeader';

const subTitle = "About Our Brand"; 
const title = "Exceptional Services and Enhanced Experiences"; 
const desc = "We consistently offer multi-functional access to users with transparent processes that drive efficiency, focusing on impactful functionality rather than complex architecture, all while offering integrated services across platforms.";
const year = "30+"; 
const experience = "Years of Expertise"; 


const aboutList = [ { imgUrl: '/src/assets/images/about/icon/01.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Skilled Instructors', desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services', }, { imgUrl: '/src/assets/images/about/icon/02.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Get Certificate', desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services', }, { imgUrl: '/src/assets/images/about/icon/03.jpg', imgAlt: 'about icon rajibraj91 rajibraj', title: 'Online Classes', desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services', }, ]


const About = () => {
  return (
    <div>
        <PageHeader title={"About Our Brand"} curPage={"About"}/>
        <div className='about-section style-3 padding-tb section-bg'>
            <div className='container'>
                <div className='row justify-content-center row-cols-xl-2 row-cols-1 align-items-center'>
                    {/* First Column */}
                    <div className='col'>
                        <div className='about-left'>
                            <div className='about-thumb'>
                                <img src="/src/assets/images/about/01.jpg" alt="" />
                            </div>
                            <div className='abs-thumb'>
                                <img src="/src/assets/images/about/02.jpg" alt="" />
                            </div>
                            <div className='about-left-content'>
                                <h3>{year}</h3>
                                <p>{experience}</p>
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className='col'>
                        <div className='about-right'>
                            <div className='section-header'>
                                <span className='subtitle'>{subTitle}</span>
                                <h2 className='title'>{title}</h2>
                                <p>{desc}</p>
                            </div>

                            <div className='section-wrapper'>
                                <ul className='lab-ul'>
                                    {
                                        aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className='sr-left'>
                                                    <img src={val.imgUrl} alt="" />
                                                </div>
                                                <div className='sr-right'>
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About
