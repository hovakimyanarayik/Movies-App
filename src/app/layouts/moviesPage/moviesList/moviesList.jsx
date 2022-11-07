import React from 'react';
import MovieItem from './movieItem';


const MoviesList = ({data}) => {
    return ( 
        <div className="movies-list-wrapper">
            {data.map(item => <MovieItem key={item.id} data={item} />)}
        </div>
    );
}
 
export default MoviesList;