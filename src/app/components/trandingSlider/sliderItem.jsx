import {Button, Divider } from '@chakra-ui/react';
import {ViewIcon } from '@chakra-ui/icons';
import React from 'react';
import DataBase from '../../database/database';
import SliderContent from './sliderContent';

const SliderItem = ({data}) => {
    return ( 
        <div 
            className='slider-item' 
            style={{backgroundImage: `url(${DataBase.getOriginalImageURL(data.backdrop_path)})`}}
            title={data.title}
        >
            <SliderContent data={data} />
        </div>
     );
}
 
export default SliderItem;