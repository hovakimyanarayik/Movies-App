import { Divider } from '@chakra-ui/react';
import React from 'react';


const Section = ({title, icon, children}) => {
    return ( 
        <div className="section">
            <div className='section-header'>
                <h1 className='section-title'>{title} </h1>
                {icon}
            </div>
            {/* <h1 className='section-title'>{title} {icon}</h1> */}
            <Divider />
            {children}
        </div>
     );
}
 
export default Section;