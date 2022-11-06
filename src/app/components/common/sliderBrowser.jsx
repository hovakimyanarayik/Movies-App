import React from 'react';


const SliderBrowser = ({children, direction, onClick}) => {
    return ( 
        <div 
            className={`slider-browser browse-${direction}`} 
            role='button'
            onClick={() => onClick(direction)}    
        >
            {children}
        </div>
     );
}
 
export default SliderBrowser;