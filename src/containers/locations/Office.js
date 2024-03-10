import { useLocation, Link  } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa6";


import LivingstonHours from './LivingstonHours';
import NewCaneyHours from './NewCaneyHours';

function Office() {
    const location = useLocation()

    return(
        <div className='office'>
            <img id='glasses-logo' src='https://i.imgur.com/BS4PJ1Y.png' />

            <h2>{location.pathname === '/locations/livingston' ?
                <><span className='office__street'>1618 W Church St, </span> Livingston, TX 77351</>
                :
                <><span className='office__street'>21836 Market Pl Dr,</span> New Caney, TX 77357</>
                }
            </h2>

            {/* Flexbox */}
            <div className='office__flexbox'>
                <div className='office__details'>
                    <h3>
                        Serving all of your optical needs
                    </h3>
                    <Link to='/services'>All Services <FaArrowRight />
                        </Link>
                    <br />
                    <Link to='/insurance'>Accepted Insurance <FaArrowRight />
                        </Link>
                    <h3>
                        Appointments and Walk-In's welcome
                    </h3>
                    {/* Hours of Operation */}
                    <div className='office__hours'>
                        Hours of Operation:

                        {location.pathname === '/locations/livingston' ?
                            <>
                                <LivingstonHours />
                                <a id='office__schedule-button' 
                                    href={location.pathname === '/locations/livingston' ? 
                                        'https://drewford.dev' 
                                        :'https://drewford.dev'} target='_blank'>
                                        Schedule Appointment
                                </a>
                            </>
                            :
                            <>
                                <NewCaneyHours />
                                <a id='office__schedule-button' 
                                    href={location.pathname === '/locations/livingston' ? 
                                        'https://drewford.dev' 
                                        :'https://drewford.dev'} target='_blank'>
                                        Schedule Appointment
                                </a>
                            </>
                        }

                    </div>
                        
                </div>
                <div className='shop__photos' id='office-photos'>


                    {location.pathname === '/locations/livingston' ? 
                            <div className='shop__composition'>
                                <img className='shop__photo shop__photo--1 shop__photo--office'
                                    src='https://i.imgur.com/f0Q3vK2.png'
                                    alt='Exam Room' />
                                <img className='shop__photo shop__photo--2 shop__photo--office'
                                    src='https://i.imgur.com/R0OYqYr.png'
                                    alt='Store Interior' />
                                <img className='shop__photo shop__photo--3 shop__photo--office'
                                    src='https://i.imgur.com/cKvgvZ4.png'
                                    alt='Store interior alt' />
                            </div>
                            :    
                            <div className='shop__composition'>
                                <img className='shop__photo shop__photo--1 shop__photo--office'
                                    src='https://i.imgur.com/Oswb3RZ.png'
                                    alt='New Caney Exam Room' />
                                <img className='shop__photo shop__photo--2 shop__photo--office'
                                    src='https://i.imgur.com/wZICBLk.png'
                                    alt='New Caney lobby' />
                                <img className='shop__photo shop__photo--3 shop__photo--office'
                                    src='https://i.imgur.com/S2E2FyH.png'
                                    alt='New Caney storefront' />
                        </div>
                    }
                </div>
            </div>


        </div>
    )
}

export default Office;