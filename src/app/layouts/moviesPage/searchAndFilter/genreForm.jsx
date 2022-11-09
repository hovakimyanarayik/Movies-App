import React from 'react';
import GenreCheckbox from './genreCheckbox';


const GenreForm = ({genres, handleGenreFilter}) => {
    return ( 
        <form>
            {genres.map(genre => (
                <GenreCheckbox
                    {...genre}
                    handleChange={handleGenreFilter}
                    key={genre.id} 
                />)
            )}
        </form>
     );
}
 
export default GenreForm;