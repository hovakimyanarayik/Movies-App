import React, { useState } from 'react';
import DataBase from '../../database/database';


const SectionSliderItem = ({ data, goToMovie }) => {
    const [moved, setMoved] = useState(false)

    return ( 
        <div 
            title={data.title}
            className={`section-slider-item ${moved ? 'kenburns-top' : ''}`}
            style={{backgroundImage: `url(${DataBase.getOriginalImageURL(data.poster_path)})`}}
            onMouseEnter={() => setMoved(true)}
            onMouseLeave={() => setMoved(false)}
            onClick={() => {
                goToMovie(data.id);
            }}
            >
                <div className={`section-slider-item-overlay ${moved ? 'show' : ''}`}>
                    <h1>{data.title}</h1>
                </div>
        </div>
     );
}
 
export default SectionSliderItem;