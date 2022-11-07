import React, { useEffect, useState } from 'react';
import SectionLoader from '../../../components/loaders/sectionLoader';
import DataBase from '../../../database/database';
import GenreCheckbox from './genreCheckbox';


const GenreForm = ({handleFilterChange}) => {
    const [genres, setGenres] = useState(null)

    useEffect(() => {
        DataBase.getGenres()
            .then(data => setGenres(data.genres))
    }, [])

    if(!genres) return (
        <SectionLoader/>
    )
    return ( 
        <form>
            {genres.map(genre => (
                <GenreCheckbox
                    handleChange={handleFilterChange}
                    key={genre.id} 
                    content={genre}
                />)
            )}
        </form>
     );
}
 
export default GenreForm;