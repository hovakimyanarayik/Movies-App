import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input } from '@chakra-ui/react';
import React, { useState } from 'react';


const SearchForm = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!searchValue.trim()) return;
        onSearch({query: searchValue.trim()})
        setSearchValue('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
                <Input
                    variant='filled' 
                    placeholder='Find a movie'
                    size='lg' 
                    fontSize='3xl'
                    padding='6'
                    value={searchValue}
                    onChange={({ target }) => setSearchValue(target.value)}
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