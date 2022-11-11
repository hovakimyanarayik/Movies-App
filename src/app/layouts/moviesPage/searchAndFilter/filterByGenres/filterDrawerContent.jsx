import React from 'react';
import {DrawerBody, DrawerCloseButton, DrawerContent } from '@chakra-ui/react';
import FilterDrawerHeader from './drawerHeader';
import GenreForm from './genreForm';


const FilterDrawerContent = ({genres}) => {

    return ( 
        <DrawerContent color='#fff' backgroundColor='#222'>
            <DrawerCloseButton />
            <FilterDrawerHeader />
  
            <DrawerBody>
                {genres && <GenreForm genres={genres} />}
            </DrawerBody>
  
        </DrawerContent>
     );
}
 
export default FilterDrawerContent;