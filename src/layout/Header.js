function Header(){
    return(
        <div className='header'>
            
            <h1>Benjamin Eye Care Associates</h1>

            {/* Locations - Livingston */}
            <div className='header__locations'>
                <div className='header__locations--city'>
                    Livingston
                </div>
                <div className='header__locations--details'>
                    <div className='header__locations--phone'>
                        (936) 327-0021
                    </div>
                    <div className='header__locations--address'>
                        <span>1618 W Church St</span>
                        <span>Livingston, TX 77351</span>
                    </div>
                </div>
            </div>

            {/* Locations - New Caney */}
            <div className='header__locations'>
                <div className='header__locations--city'>
                    New Caney
                </div>
                <div className='header__locations--details'>
                    <div className='header__locations--phone'>
                        (555) 555-5555
                    </div>
                    <div className='header__locations--address'>
                        <span>21836 Market Pl Dr</span>
                        <span>New Caney, TX 77357</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;