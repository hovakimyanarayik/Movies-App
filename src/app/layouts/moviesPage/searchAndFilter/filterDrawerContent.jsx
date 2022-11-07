import {DrawerBody, DrawerCloseButton, DrawerContent } from '@chakra-ui/react';
import React from 'react';
import FilterDrawerHeader from './drawerHeader';
import GenreForm from './genreForm';


const FilterDrawerContent = ({genres, handleGenreFilter}) => {
    return ( 
        <DrawerContent color='#fff' backgroundColor='#222'>
            <DrawerCloseButton />
            <FilterDrawerHeader />
  
            <DrawerBody>
                <GenreForm genres={genres} handleGenreFilter={handleGenreFilter} />
            </DrawerBody>
  
        </DrawerContent>
     );
}
 
export default FilterDrawerContent;