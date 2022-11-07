import {DrawerBody, DrawerCloseButton, DrawerContent } from '@chakra-ui/react';
import React from 'react';
import FilterDrawerHeader from './drawerHeader';
import GenreForm from './genreForm';


const FilterDrawerContent = ({handleFilterChange}) => {
    return ( 
        <DrawerContent color='#fff' backgroundColor='#222'>
            <DrawerCloseButton />
            <FilterDrawerHeader />
  
            <DrawerBody>
                <GenreForm handleFilterChange={handleFilterChange} />
            </DrawerBody>
  
        </DrawerContent>
     );
}
 
export default FilterDrawerContent;