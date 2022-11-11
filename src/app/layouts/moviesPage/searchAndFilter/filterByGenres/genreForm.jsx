import React from 'react';
import { useFilterByGenres } from '../../../../hooks/useFilterByGenres'
import GenreCheckbox from './genreCheckbox';

const GenreForm = ({genres}) => {
    const {selectedGenres, handleGenreFilter} = useFilterByGenres()
    return ( 
        <form>
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