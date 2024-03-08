import { Link } from 'react-router-dom'

function Toolbar() {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='insurance'>Insurance</Link>
            <Link to='services'>Services</Link>
            <Link to='livingston'>Livingston</Link>
            <Link to='newcaney'>New Caney</Link>
            Schedule Appointment 
            {/* animated popup to choose livingston or new caney */}
        </div>
    )
}

export default Toolbar;