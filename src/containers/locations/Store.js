import { useLocation } from 'react-router-dom'

function Store() {
    const location = useLocation()

    return(
        <div>
            Welcome to &nbsp;
            {location.pathname === '/locations/livingston' ?
            
            <>Walmart Vision Center</>
            :
            <>Target Optical</>
            }

        </div>
    )
}

export default Store;