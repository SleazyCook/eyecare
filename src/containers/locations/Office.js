import { useLocation } from 'react-router-dom'

function Office() {
    const location = useLocation()

    return(
        <div className='office'>
            <div className='office__details'>
                <h3>
                    Services
                </h3>
                <h3>
                    Insurance
                </h3>
                {location.pathname === '/locations/livingston' ?
                
                <button>Schedule Now</button>
                :
                <>Walk in only</>
                }
                    
            </div>
            <div className='shop__photos' id='office-photos'>


                {location.pathname === '/locations/livingston' ? 
                        <div className='shop__composition'>
                            <img className='shop__photo shop__photo--1 shop__photo--office'
                                src='https://i.imgur.com/V7TMXH9.png'
                                alt='Walmart Vision Center logo' />
                            <img className='shop__photo shop__photo--2 shop__photo--office'
                                src='https://i.imgur.com/aEAqRjh.png'
                                alt='Walmart Vision Center storefront alt' />
                            <img className='shop__photo shop__photo--3 shop__photo--office'
                                src='https://i.imgur.com/qi8lWer.png'
                                alt='Walmart vison center storefront' />
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
    )
}

export default Office;