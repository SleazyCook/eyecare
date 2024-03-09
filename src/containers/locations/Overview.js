import { useLocation } from 'react-router-dom'

function Overview() {
    const location = useLocation()

    return(
        <div>
            Overview of &nbsp;
            {location.pathname === '/locations/livingston' ?
            
            <>Livingston Location</>
            :
            <>New Caney Location</>
            }
        </div>
    )
}

export default Overview;