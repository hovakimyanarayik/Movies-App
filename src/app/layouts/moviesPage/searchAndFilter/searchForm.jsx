import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input } from '@chakra-ui/react';
import React from 'react';


const SearchForm = () => {
    return ( 
        <form>
                <Input
                    variant='filled' 
                    placeholder='Find a movie'
                    size='lg' 
                    fontSize='3xl'
                    padding='6'
                />
                <IconButton
                    colorScheme='whiteAlpha'
                    aria-label='Search database'
                    icon={<SearchIcon fontSize='2xl' />}
                    size='lg'
                    paddingY='7'
                    type='submit'
                />
            </form>
     );
}
 
export default SearchForm;