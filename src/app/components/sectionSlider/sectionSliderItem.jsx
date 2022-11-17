import React, { useState } from 'react';
import DataBase, { notFoundImage } from '../../database/database';


const SectionSliderItem = ({ data, goToMovie }) => {
    const [moved, setMoved] = useState(false)

    return ( 
        <div 
            title={data.title}
            className={`section-slider-item ${moved ? 'kenburns-top' : ''}`}
            style={{backgroundImage: `url(${data.poster_path ? (
                DataBase.getOriginalImageURL(data.poster_path)
                ) : (
                    notFoundImage
                )})`}}
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