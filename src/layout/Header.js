import { Link } from 'react-router-dom'

import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { LiaFaxSolid } from "react-icons/lia";

function Header(){
    return(
        <div className='header'>
            
            <h1>Benjamin Eye Care Associates</h1>

            {/* Locations - Livingston */}
            <Link to='/locations/livingston' className='header__locations'>
                <div className='header__locations--city'>
                    Livingston
                </div>
                <div className='header__locations--details'>
                    <div className='header__locations--phone'>
                        <HiOutlinePhone /> (936) 327-0021
                        <br />
                        <LiaFaxSolid /> (936) 327-0033
                    </div>
                    <div className='header__locations--address'>
                        <span><IoLocationOutline />1618 W Church St</span>
                        <span>Livingston, TX 77351</span>
                    </div>
                </div>
            </Link>

            {/* Locations - New Caney */}
            <Link to='/locations/new-caney' className='header__locations'>
                <div className='header__locations--city'>
                    New Caney
                </div>
                <div className='header__locations--details'>
                    <div className='header__locations--phone'>
                        <HiOutlinePhone /> (832) 432-6171
                        <br />
                        <LiaFaxSolid /> (832) 432-6170
                    </div>
                    <div className='header__locations--address'>
                        <span><IoLocationOutline /> 21836 Market Pl Dr</span>
                        <span>New Caney, TX 77357</span>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Header;