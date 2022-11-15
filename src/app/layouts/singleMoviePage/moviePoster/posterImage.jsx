import React from 'react';
import DataBase, { notFoundImage } from '../../../database/database';

const PosterImage = ({ url }) => {

    return ( 
        <img 
            className='poster-image'
            src={url ? DataBase.getOriginalImageURL(url) : notFoundImage} 
            alt="Poster" 
        />
    );
}
 
export default PosterImage;