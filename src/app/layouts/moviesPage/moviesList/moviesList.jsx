import { Center, Heading } from '@chakra-ui/react';
import React from 'react';
import MovieItem from './movieItem';


const MoviesList = ({data}) => {

    if(!data.length) return (
        <Center mt={10}>
            <Heading>No Results...</Heading>
        </Center>
    )
    return ( 
        <div className="movies-list-wrapper">
            {data.map(item => <MovieItem key={item.id} data={item} />)}
        </div>
    );
}
 
export default MoviesList;