import './footer.css'
import React from 'react';
import { Divider } from '@chakra-ui/react';
import Logo from '../common/logo';
import SectionsWrapper from '../common/sectionsWrapper';
import FooterContent from './footerContent';
import FooterLeftContent from './footerLeftContent';
import FooterRightContent from './footerRightContent';


const Footer = () => {
    return ( 
        <div className='footer-wrapper'>
            <SectionsWrapper>
                <Logo />
                <Divider />
                <FooterContent left={<FooterLeftContent />} right={<FooterRightContent />} />
            </SectionsWrapper>
        </div>
     );
}
 
export default Footer;