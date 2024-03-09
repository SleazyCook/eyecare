
import { Link } from 'react-router-dom'

import MainLinks from './MainLinks'
import Locations from './Locations'
import ScheduleAppt from './ScheduleAppt';

function Toolbar() {
    return(
        <div className='toolbar'>
            <MainLinks />
            <Locations />
            <ScheduleAppt />
        </div>
    )
}

export default Toolbar;