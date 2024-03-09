import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Locations() {

    const [open, setOpen] = useState(false)
    let menuRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handler)

        return() => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return(
        <div className='menu-container' ref={menuRef}>
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                Locations
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <ul onClick={()=>{setOpen(!open)}}>
                <DropdownItem link = {'/locations/livingston'} text = {'Livingston'} />
                <DropdownItem link = {'/locations/new-caney'} text = {'New Caney'} />
            </ul>
            </div>
        </div>
    )

}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <Link to={props.link}>{props.text}</Link>
      </li>
    );
  }

export default Locations;