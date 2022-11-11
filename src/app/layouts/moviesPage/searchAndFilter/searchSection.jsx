import React from 'react';
import SearchForm from './search/searchForm';
import FilterDrawer from './filterByGenres/filterDrawer';



const SearchSection = ({onSearch}) => {
    return ( 
        <div className='search-section'>
            <SearchForm onSearch={onSearch} />
            <FilterDrawer/>
        </div>
     );
}
 
export default SearchSection;