import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataBase from '../../database/database';


const SectionSliderItem = ({ data }) => {
    const [moved, setMoved] = useState(false)
    const navigate = useNavigate()

    return ( 
        <div 
            title={data.title}
            className={`section-slider-item ${moved ? 'kenburns-top' : ''}`}
            style={{backgroundImage: `url(${DataBase.getOriginalImageURL(data.poster_path)})`}}
            onMouseEnter={() => setMoved(true)}
            onMouseLeave={() => setMoved(false)}
            onClick={() => {
                navigate(`movie/${data.id}`);
            }}
            >
                <div className={`section-slider-item-overlay ${moved ? 'show' : ''}`}>
                    <h1>{data.title}</h1>
                </div>
        </div>
     );
}
 
export default SectionSliderItem;