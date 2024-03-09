import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ToolbarModal({setCardOpen}) {

    // function handleCloseModal(event) {
    //     if (event.target.id ==='detailed-media-parent' || event.target.id == 'modal-close') {
    //         setCardOpen(false)
    //     }
    // }

    // useEffect(() => {

    // }, [])

    return(
        <div className='toolbar__modal' onMouseOver={setCardOpen(true)}>
            Menu
        </div>
    )
}

export default ToolbarModal;