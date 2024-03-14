import { useEffect } from 'react'

function Services() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
      }, [])
      
    return(
        <div className='services'>
            <div className='services__header'>
                <h1>
                    <span className='services__header--primary'>services provided</span>
                    <span className='services__header--secondary'>serving all of your optical needs</span>
                </h1>    
            </div>
        </div>
    )
}

export default Services;