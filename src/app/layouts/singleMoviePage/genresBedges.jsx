import { Badge, Box } from '@chakra-ui/react';
import React from 'react';


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