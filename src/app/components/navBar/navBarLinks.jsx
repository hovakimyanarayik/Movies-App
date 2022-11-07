import React from 'react';
import { Link} from 'react-router-dom';
import { layoutsList } from '../../layouts/layoutsList';
import Logo from '../common/logo';
import NavLink from './navLink';



const NavBarLinks = () => {
    
    return ( 
        <div className='nav-left'>
            <Link to={''}>
                <Logo  />
            </Link>
            {layoutsList.map(item => (
                <NavLink key={item.title} isActive={true} {...item}  />
            ))}
        </div>
     );
}
 
export default NavBarLinks;