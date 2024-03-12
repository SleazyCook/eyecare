import { useLocation } from 'react-router-dom'

function Form() {
    const location = useLocation()

    return(
        <div className='form'>

            Reach out to &nbsp;
            {location.pathname === '/locations/livingston' ?
            
            <>Livingston Location</>
            :
            <>New Caney Location</>
            }

        </div>
    )
}

export default Form;