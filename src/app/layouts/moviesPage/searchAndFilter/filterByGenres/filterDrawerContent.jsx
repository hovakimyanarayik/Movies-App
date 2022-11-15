import React from 'react';
import {DrawerBody, DrawerCloseButton, DrawerContent } from '@chakra-ui/react';
import FilterDrawerHeader from './drawerHeader';
import GenreForm from './genreForm';
import FilterByYear from '../filterByYear/filterByYear';


const FilterDrawerContent = ({genres}) => {

    return ( 
        <DrawerContent color='#fff' backgroundColor='#222'>
            <DrawerCloseButton />
            <FilterDrawerHeader />
  
            <DrawerBody>
                <FilterByYear />
                {genres && <GenreForm genres={genres} />}
            </DrawerBody>
  
        </DrawerContent>
     );
}
 
export default FilterDrawerContent;