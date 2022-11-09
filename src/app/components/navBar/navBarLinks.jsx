import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import { navLinks } from './navLinks';
import { scrollToTop } from '../../utils';
import Logo from '../common/logo';



const NavBarLinks = () => {
    
    return ( 
        <div className='nav-left'>
            <Link to={''}>
                <Logo  />
            </Link>
            {navLinks.map(item => (
                <NavLink 
                    className='nav-link'
                    key={item.title} 
                    to={item.path}
                    style={({isActive}) => isActive ? {color: "white", textDecoration: "underline"} : {} }
                    onClick={scrollToTop}
                >
                    {item.title}
                </NavLink>
            ))}
        </div>
     );
}
 
export default NavBarLinks;