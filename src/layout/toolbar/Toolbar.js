import { Link } from 'react-router-dom'

import MainLinks from './MainLinks';

function Toolbar() {
    return(
        <div className='toolbar'>

            <div className='toolbar__buttons'>
                <MainLinks />

                <div>Locations</div>
                {/* dropdown icon */}
                {/* animated popup to choose livingston or new caney */}

                <div>Schedule Appointment</div>
                {/* dropdown icon */}
                {/* animated popup to choose livingston or new caney */}
            </div>
        </div>
    )
}

export default Toolbar;