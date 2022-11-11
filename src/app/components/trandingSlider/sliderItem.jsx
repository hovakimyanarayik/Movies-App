import React from 'react';
import DataBase from '../../database/database';
import SliderContent from './sliderContent';

const SliderItem = ({data, goToMovie}) => {

    return ( 
        <div 
            className='slider-item' 
            style={{backgroundImage: `url(${DataBase.getOriginalImageURL(data.backdrop_path)})`}}
            title={data.title}
        >
            <SliderContent data={data} goToMovie={goToMovie} />
        </div>
     );
}
 
export default SliderItem;