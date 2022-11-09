import React from 'react';
import SearchForm from './searchForm';
import FilterDrawer from './filterDrawer';


const SearchSection = ({genres, handleGenreFilter, onSearch}) => {
    return ( 
        <div className='search-section'>
            <SearchForm onSearch={onSearch} />
            <FilterDrawer genres={genres} handleGenreFilter={handleGenreFilter} />
        </div>
     );
}
 
export default SearchSection;