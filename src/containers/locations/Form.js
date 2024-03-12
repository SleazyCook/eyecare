import { useLocation } from 'react-router-dom'

function Form() {
    const location = useLocation()

    return(
        <div className='form-container'>
{/* 
            Reach out to &nbsp;
            {location.pathname === '/locations/livingston' ?
            
            <>Livingston Location</>
            :
            <>New Caney Location</>
            } */}

            <h2>Contact Us</h2>
            <form className='form' action="https://formsubmit.co/andrewjcook93@gmail.com" method="post">
                <input placeholder='Your Name' type="text" id="name" name="name" required />

                <input placeholder='Your Email' type="email" id="email" name="email" required />

                <textarea placeholder='Message' id="message" name="message" required></textarea>

                <input type="submit" value="Submit" />
            </form>

        </div>
    )
}

export default Form;