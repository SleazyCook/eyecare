import { useLocation } from 'react-router-dom'

function Office() {
    const location = useLocation()

    return(
        <div>

            Office Details for &nbsp;
            {location.pathname === '/locations/livingston' ?
            
            <>Livingston Location</>
            :
            <>New Caney Location</>
            }

        </div>
    )
}

export default Office;