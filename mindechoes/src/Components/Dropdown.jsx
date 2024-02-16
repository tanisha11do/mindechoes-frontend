import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown() {
    const [state, setstate] = useState(false);
const showDropdown = () => {
    setstate(true);
}
const hideDropdown = () => {
    setstate(false);
}
  return (
    <div className='dropdown'>
        <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            Support 
            {state?(<ul className='dropdown-list' onMouseEnter={showDropdown}>
                <li>Therapists</li>
                <li>Psychologists</li>
                <li>Support Groups</li>
            </ul>):null}
            
        </div>
    </div>
  )
}

export default Dropdown