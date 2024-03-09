import { useLocation } from 'react-router-dom'

function Overview() {
    const location = useLocation()

    return(
        <div className={location.pathname === '/locations/livingston' ? 
            'location-overview location-overview__livingston' : 
            'location-overview location-overview__new-caney'}>

            {/* Text Area */}
            <div className='location-overview__header'>
                {/* Header Text */}
                <h1>
                    <span className='location-overview__header--primary'>
                        {location.pathname === '/locations/livingston' ?
                            <>Livingston Office</>
                            :
                            <>New Caney Office</>
                        }
                    </span>
                    <span className={location.pathname === '/locations/livingston' ? 
                        'location-overview__header--secondary location-overview__header--secondary-livingston' : 
                        'location-overview__header--secondary location-overview__header--secondary-new-caney'}>
                        {/* Partnered with &nbsp; */}
                        {location.pathname === '/locations/livingston' ?
                            <img src='https://i.imgur.com/3b6WWwS.png' />
                            :
                            <img src='https://i.imgur.com/SrV68sw.png' />
                        }
                    </span>
                </h1>
                {/* Buttons */}
                <a className='location-overview__header--button' href='drewford.dev' target='_blank'>
                        Schedule Appointment
                </a>
                <a className='location-overview__header--button' href='drewford.dev' target='_blank'>
                    Directions
                </a>    
            </div>

        </div>
    )
}

export default Overview;