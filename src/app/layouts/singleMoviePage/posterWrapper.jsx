import React from 'react';
import DataBase from '../../database/database';

const PosterWrapper = ({ children, url }) => {


    return ( 
        <div 
            className="poster-wrapper"
            style={{
                backgroundImage: `${url ? `url(${DataBase.getOriginalImageURL(url)})` : ''}`
            }}
        >
            <div className="poster-overlay">
                <div className="poster-flex">
                    {children}
                </div>
            </div>
        </div>
     );
}
 
export default PosterWrapper;