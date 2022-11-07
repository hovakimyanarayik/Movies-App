import React from 'react';
import SearchForm from './searchForm';
import FilterDrawer from './filterDrawer';


const SearchSection = ({genres, handleGenreFilter}) => {
    return ( 
        <div className='search-section'>
            <SearchForm />
            <FilterDrawer genres={genres} handleGenreFilter={handleGenreFilter} />
        </div>
     );
}
 
export default SearchSection;