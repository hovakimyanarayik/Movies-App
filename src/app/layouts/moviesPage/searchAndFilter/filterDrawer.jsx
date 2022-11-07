import { Button, Drawer, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterDrawerContent from './filterDrawerContent';


function FilterDrawer({ handleFilterChange }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <div className='filter-contain'>
        <Button 
            ref={btnRef}
            onClick={onOpen}
            colorScheme='red' 
            fontSize='1.5rem' 
            px={10} py={7}
            variant='outline'
            title='Watch' 
        >
            <FaFilter size='16px' /> 
            &nbsp;
            Genres
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size='sm'
          
        >
          <DrawerOverlay />
          <FilterDrawerContent handleFilterChange={handleFilterChange} />
        </Drawer>
      </div>
    )
  }


export default FilterDrawer;