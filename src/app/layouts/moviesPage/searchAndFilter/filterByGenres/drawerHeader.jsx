import React from 'react';
import { Divider, DrawerHeader } from '@chakra-ui/react';


const FilterDrawerHeader = () => {
    return ( 
        <DrawerHeader>
            <h1 className='drawer-header'>Movies Filter</h1>
            <Divider />
        </DrawerHeader>
     );
}
 
export default FilterDrawerHeader;