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
                <a className='location-overview__header--button' 
                    href={location.pathname === '/locations/livingston' ? 
                        'https://drewford.dev' 
                        :'https://drewford.dev'} target='_blank'>
                        Schedule Appointment
                </a>
                <a className='location-overview__header--button' 
                    href={location.pathname === '/locations/livingston' ? 
                        'https://www.google.com/maps/place/Walmart+Supercenter/@30.7159202,-94.9575004,17z/data=!3m1!4b1!4m6!3m5!1s0x86388698b08d0d17:0x8cc402e4d5031f7e!8m2!3d30.7159156!4d-94.9549255!16s%2Fg%2F11bxbb1nls?entry=ttu' 
                        :'https://www.google.com/maps/place/Target+Optical/@30.1332134,-95.2356684,17z/data=!3m1!4b1!4m6!3m5!1s0x86474d9a671ddbfd:0xba677e390abf74d6!8m2!3d30.1332134!4d-95.2330935!16s%2Fg%2F11l2v2d8qz?entry=ttu'} target='_blank'>
                    Directions
                </a>    
            </div>

        </div>
    )
}

export default Overview;