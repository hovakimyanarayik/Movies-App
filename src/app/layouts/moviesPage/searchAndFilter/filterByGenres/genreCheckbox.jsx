import React from 'react';


const GenreCheckbox = ({ name, id, selectedGenres, handleChange}) => {
    return (
        <div className='single-genre-wrapper'>
            <input
                id={id}
                type="checkbox" 
                checked={selectedGenres.includes(id)} 
                onChange={() => handleChange(id)} 
            />
            <label htmlFor={id}>{name}</label>
        </div>
        
     );
}
 
export default GenreCheckbox;