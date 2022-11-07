import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils';



const NavLink = ({link, title, isActive}) => {
    return ( 
        <Link to={link}>
            <p className={isActive ? "active" : ""} onClick={scrollToTop}>{title}</p>
        </Link>
     );
}
 
export default NavLink;