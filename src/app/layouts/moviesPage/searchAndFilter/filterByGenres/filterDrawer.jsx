import React, { useEffect, useRef, useState } from 'react';
import DataBase, { endpoints } from '../../../../database/database';
import { FaFilter } from 'react-icons/fa';
import FilterDrawerContent from './filterDrawerContent';
import { Button, Drawer, DrawerOverlay, useDisclosure } from '@chakra-ui/react';


function FilterDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const [genres, setGenres] = useState(null)

    useEffect(() => {
        DataBase.get(endpoints.genres())
        .then(res => setGenres(res.genres))
    }, [])

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
          <FilterDrawerContent genres={genres} />
        </Drawer>
      </div>
    )
  }


export default FilterDrawer;