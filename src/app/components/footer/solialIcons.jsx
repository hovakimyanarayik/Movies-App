import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const SocialIconsList = () => {

    return ( 
        <div className='social-icons-list'>
            <a 
                href="https://www.facebook.com/profile.php?id=100006369948594" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaFacebook className='footer-icon' />
            </a>
            <FaInstagram className='footer-icon' />
            <FaYoutube className='footer-icon' />
            <FaTwitter className='footer-icon' />
        </div>
     );
}
 
export default SocialIconsList;