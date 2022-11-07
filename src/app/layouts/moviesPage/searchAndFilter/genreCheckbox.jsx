import React from 'react';


const GenreCheckbox = ({ name, id, selected, handleChange}) => {
    return (
        <div className='single-genre-wrapper'>
            <input
                id={id}
                type="checkbox" 
                checked={selected} 
                onChange={() => handleChange(id)} 
            />
            <label htmlFor={id}>{name}</label>
        </div>
        
     );
}
 
export default GenreCheckbox;