import { Divider, Text } from '@chakra-ui/react';
import React from 'react';
import { useFilterByGenres } from '../../../../hooks/useFilterByGenres'
import GenreCheckbox from './genreCheckbox';

const GenreForm = ({genres}) => {
    const {selectedGenres, handleGenreFilter} = useFilterByGenres()
    return ( 
        <form>
            <Text mt={5} fontSize='3xl'>Genres</Text>
            <Divider />
            {genres.map(genre => (
                <GenreCheckbox
                    selectedGenres={selectedGenres}
                    {...genre}
                    handleChange={handleGenreFilter}
                    key={genre.id} 
                />)
            )}
        </form>
     );
}
 
export default GenreForm;