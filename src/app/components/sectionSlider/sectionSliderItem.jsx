import React from 'react';
import { useState } from 'react';
import DataBase from '../../database/database';


const SectionSliderItem = ({ data }) => {
    const [moved, setMoved] = useState(false)

    return ( 
        <div 
            className={`section-slider-item ${moved ? 'kenburns-top' : ''}`}
            style={{backgroundImage: `url(${DataBase.getOriginalImageURL(data.poster_path)})`}}
            onMouseEnter={() => setMoved(true)}
            onMouseLeave={() => setMoved(false)}
            onClick={() => {
                console.log('REDIRECT TO SINGLE MOVIE PAGE', data.id);
            }}
            >
                <div className={`section-slider-item-overlay ${moved ? 'show' : ''}`}>
                    <h1>{data.title}</h1>
                </div>
        </div>
     );
}
 
export default SectionSliderItem;