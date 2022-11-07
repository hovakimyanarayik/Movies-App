import { Divider, DrawerHeader } from '@chakra-ui/react';
import React from 'react';


const FilterDrawerHeader = () => {
    return ( 
        <DrawerHeader>
            <h1 className='drawer-header'>Filter by Genres</h1>
            <Divider />
        </DrawerHeader>
     );
}
 
export default FilterDrawerHeader;