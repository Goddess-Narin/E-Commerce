import React from 'react'
import { Link } from 'react-router-dom';
const title = "More Then 90,000 Customers";

const desc = "Shop from any device with our easy-to-use app and enjoy the freedom to shop anytime, anywhere. Simply download, install, and start exploring – your favorite products are just a tap away!";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
]
const LocationSprade = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
        <div className='caontainer'>
            <div className='section-header text-center'>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
            </div>

            {/* Main Content */}
            <div className='section-wrapper'>
                <div className='clients'>
                    {
                        clientsList.map((val, i) => (
                            <div key={i} className='client-list'>
                                <Link to="/sign-up">
                                <span>{val.text}</span>
                                </Link>
                                <div className='client-thumb'>
                                    <img src={val.imgUrl} alt="" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocationSprade
