import React from 'react';
import SearchForm from './searchForm';
import FilterDrawer from './filterDrawer';


const SearchSection = ({ handleFilterChange }) => {
    return ( 
        <div className='search-section'>
            <SearchForm />
            <FilterDrawer handleFilterChange={handleFilterChange} />
        </div>
     );
}
 
export default SearchSection;