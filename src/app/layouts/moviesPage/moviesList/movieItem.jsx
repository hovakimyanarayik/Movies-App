import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';
import VoteStars from '../../../components/common/voteStars';
import DataBase from '../../../database/database';
import { formateDate } from '../../../utils';


const MovieItem = ({data}) => {

    return ( 
        <div className='movie-list-item'>
            <img src={`${DataBase.getOriginalImageURL(data.poster_path)}`} alt="movie" />
            <div>
                <h1>{data.title}</h1>
                {data.release_date && <p>Release date: {formateDate(data.release_date)}</p>}
                <VoteStars votes={data.vote_average} />
            </div>
        </div>
     );
}
 
export default MovieItem;