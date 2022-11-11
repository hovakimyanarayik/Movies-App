import React from 'react';
import { useGoToMovie } from '../../../hooks/useGoToMovie';
import { Center, Heading } from '@chakra-ui/react';
import MovieItem from './movieItem';


const MoviesList = ({data}) => {
    const goToMovie = useGoToMovie()

    if(!data.length) return (
        <Center mt={10}>
            <Heading>No Results...</Heading>
        </Center>
    )
    return ( 
        <div className="movies-list-wrapper">
            {data.map(item => <MovieItem goToMovie={goToMovie} key={item.id} data={item} />)}
        </div>
    );
}
 
export default MoviesList;