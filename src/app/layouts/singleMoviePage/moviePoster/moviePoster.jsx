import '../singleMovie.css'
import React, { useEffect } from 'react';
import PosterWrapper from './posterWrapper';
import PosterImage from './posterImage';
import PosterInfo from './posterInfo';


const MoviePoster = ({ data }) => {
    useEffect(() => {
        document.title = data.title
    })
    return ( 
        <PosterWrapper url={data.backdrop_path}>
            <PosterImage url={data.poster_path} />
            <PosterInfo data={data} />
        </PosterWrapper>
            
    );
}
 
export default MoviePoster;