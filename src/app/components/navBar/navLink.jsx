import React from 'react';
import { Link } from 'react-router-dom';



const NavLink = ({link, title, isActive}) => {
    return ( 
        <Link to={link}>
            <p className={isActive ? "active" : ""}>{title}</p>
        </Link>
     );
}
 
export default NavLink;