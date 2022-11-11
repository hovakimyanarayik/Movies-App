import React from 'react';
import { Badge, Box } from '@chakra-ui/react';


const GenresBedges = ({ genres }) => {

    return ( 
        <Box mt={4}>
            {genres.map(genre => (
                <Badge 
                    ml={2}
                    key={genre.id}
                    fontSize='1.2rem'
                >
                {genre.name}
                </Badge>
            ))}
        </Box>
     );
}
 
export default GenresBedges;