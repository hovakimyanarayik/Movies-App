import { Checkbox } from '@chakra-ui/react';
import React from 'react';


const GenreCheckbox = ({content , handleChange}) => {
    return ( 
        <Checkbox className='genre-input' onChange={() => handleChange(content.id)} size='lg' colorScheme='gray'>
            <p> {content.name} </p>
        </Checkbox>
     );
}
 
export default GenreCheckbox;