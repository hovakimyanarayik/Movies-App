import React from 'react';
import {FaGithub, FaReact } from 'react-icons/fa';
 

const FooterRightContent = () => {

    return ( 
        <div>
            <h1>About Project</h1>
            <p>Creacted in Yerevan, Armenia 2022</p>
            <p>Project <FaReact className='footer-icon' /></p>
            <a href="https://github.com/hovakimyanarayik" target='_blank' rel="noopener noreferrer">
                <p>GitHub Repositorie <FaGithub className='footer-icon' /></p>
            </a>
            
        </div>
     );
}
 
export default FooterRightContent;