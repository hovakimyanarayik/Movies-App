import React from 'react';
import { NavLink} from 'react-router-dom';
import { navLinks } from './navLinks';



const NavBarLinks = () => {
    
    return ( 
        <div className='nav-right'>
            {navLinks.map(item => (
                <NavLink 
                    className='nav-link'
                    key={item.title} 
                    to={item.path}
                    style={({isActive}) => isActive ? {color: "white", textDecoration: "underline"} : {} }
                >
                    {item.title}
                </NavLink>
            ))}
        </div>
     );
}
 
export default NavBarLinks;