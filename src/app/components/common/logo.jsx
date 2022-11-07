import React from 'react';
import { scrollToTop } from '../../utils';

const Logo = () => {
    return ( 
            <h1 className='logo tracking-in-expand' onClick={scrollToTop}>Movies App</h1>
     );
}
 
export default Logo;