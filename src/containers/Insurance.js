import { useEffect } from 'react'

function Insurance() {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0})
      }, [])
      
    return(
        <div className='insurance'>
            <div className='insurance__header'>
                <h1>
                    <span className='insurance__header--primary'>insurance</span>
                    <span className='insurance__header--secondary'>all major plans accepted</span>
                </h1>    
            </div>
        </div>
    )
}

export default Insurance;