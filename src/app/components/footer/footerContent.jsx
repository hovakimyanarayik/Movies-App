import { Divider } from '@chakra-ui/react';
import React from 'react';


const FooterContent = ({left, right}) => {
    return ( 
        <div className="footer-content">
            <div>{left}</div>
            <div>{right}</div>
        </div>
     );
}
 
export default FooterContent;