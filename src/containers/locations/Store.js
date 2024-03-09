import { useLocation } from 'react-router-dom'

function Store() {
    const location = useLocation()

    return(
        <div className='shop'>
            <img id='target-logo' src='https://i.imgur.com/zOp1Bu2.png' />
            <h2>
                Glasses & Contacts from&nbsp;
                {location.pathname === '/locations/livingston' ?
                
                <>Walmart Vision Center</>
                :
                <>
                Target Optical
                </>
                
                }
            </h2>
            
            {/* Flex Container */}
            <div className='shop__flexbox'>
                {/* Photos */}
                <div className='shop__photos'>
                    <div className='shop__composition'>
                        <img className='shop__photo shop__photo--1'
                            src='https://i.imgur.com/DQ6jeF3.png'
                            alt='Target Optical Team' />
                        <img className='shop__photo shop__photo--2'
                            src='https://i.imgur.com/bzgZCpT.png'
                            alt='Target Optical Store photo 1' />
                        <img className='shop__photo shop__photo--3'
                            src='https://i.imgur.com/sBnAHJN.jpg'
                            alt='Target Optical Team photo 2' />
                    </div>
                </div>
                {/* Shop Details */}
                <div className='shop__details'>
                    <h3>All Insurance welcome in store and online!</h3>
                    {/* Insurance Icons */}
                    <div className='shop__insurance-icons'>
                        <img alt='aetna' src='https://i.imgur.com/RGBRllu.png' />
                        <img alt='humana' src='https://i.imgur.com/6LodIta.png' />
                        <img alt='eye med' src='https://i.imgur.com/IJxlZhJ.png' />
                        <img alt='united healthcare vision' src='https://i.imgur.com/5k4qZ4q.png' />
                        <img alt='aarp' src='https://i.imgur.com/iiHOGEI.png' />
                        <br />
                        <img alt='prescription only' src='https://i.imgur.com/Tewi6oS.png' />
                    </div>

                    <h3>Your favorite brands in one place and more!</h3>
                    <div className='shop__brand-icons'>
                        <img alt='armani exchange' src='https://i.imgur.com/HlaxpDB.png' />
                        <img alt='ray-ban' id='ray-ban' src='https://i.imgur.com/k0pCjtw.png' />
                        <img alt='oakley' id='oakley' src='https://i.imgur.com/J9orfAB.png' />
                        <img alt='vogue eyewear' src='https://i.imgur.com/UFws6M7.png' />
                        <img alt='emporio armani' id='emporio' src='https://i.imgur.com/uUAJuuD.png' />
                        <br />
                        <img alt='goodfellow' src='https://i.imgur.com/0HBTT0o.png' />
                        <img alt='coach' src='https://i.imgur.com/PYi0t9G.png' />
                        <img alt='michael kors' src='https://i.imgur.com/ZW487kJ.png' />
                        <img alt='ralph lauren eyewear' src='https://i.imgur.com/veozWUB.png' />
                    </div>

                    <a className='shop__button' href='https://local.targetoptical.com/tx/new-caney/21836-market-place-dr.html' target='_blank'>Shop Now</a>
                </div>
            </div>

        </div>
    )
}

export default Store;