import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/logo';
import NavBarLinks from './navBarLinks';


const NavBar = () => {

    return ( 
        <div className='nav-bar-wrapper'>
            <div className='nav-bar'>
                <Link to={''}>
                    <Logo  />
                </Link>
                <NavBarLinks />
            </div>
            
        </div>
     );
}
 
export default NavBar;