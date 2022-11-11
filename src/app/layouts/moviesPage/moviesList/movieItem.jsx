import React from 'react';
import VoteStars from '../../../components/common/voteStars';
import DataBase, { notFoundImage } from '../../../database/database';
import { formateDate } from '../../../utils';



const MovieItem = ({data, goToMovie}) => {
    return ( 
        <div 
            className='movie-list-item' 
            title={data.title}
            onClick={() => {
                goToMovie(data.id)
            }}
        >
            <img 
                src={data.poster_path ? DataBase.getOriginalImageURL(data.poster_path) : notFoundImage} 
                alt="movie" 
            /> 
            <div>
                <h1>{data.title}</h1>
                {data.release_date && <p>Release date: {formateDate(data.release_date)}</p>}
                <VoteStars votes={data.vote_average} />
            </div>
        </div>
     );
}
 
export default MovieItem;