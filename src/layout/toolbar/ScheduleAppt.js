import { useState, useEffect, useRef } from 'react'

import { IoMdArrowDropdown } from "react-icons/io";

function ScheduleAppt() {

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
            <div className={open ? 'menu-trigger menu-trigger--open' : 'menu-trigger'} onClick={()=>{setOpen(!open)}}>
                Schedule Appointment  <IoMdArrowDropdown />
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <ul onClick={()=>{setOpen(!open)}}>
                <DropdownItem link = {'https://drewford.dev/'} text = {'Livingston'} />
                <DropdownItem link = {'https://drewford.dev/'} text = {'New Caney'} />
            </ul>
            </div>
        </div>
    )

}

function DropdownItem(props){
    return(
      <li className = 'dropdownItem'>
        <a href={props.link} target='_blank'>{props.text}</a>
      </li>
    );
  }

export default ScheduleAppt;