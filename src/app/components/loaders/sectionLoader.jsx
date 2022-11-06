import './loader.css'
import React from 'react';


const SectionLoader = () => {
    return ( 
        <div className="loader-wrapper">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
     );
}
 
export default SectionLoader;