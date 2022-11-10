import { Divider } from '@chakra-ui/react';
import React from 'react';


const Section = ({title, icon, children}) => {
    return ( 
        <div className="section">
            <div className='section-header'>
                <h1 className='section-title'>{title} </h1>
                {icon}
            </div>
            <Divider />
            {children}
        </div>
     );
}
 
export default Section;