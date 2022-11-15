import React from 'react';
import { Badge, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const GenresBedges = ({ genres }) => {
    const navigate = useNavigate()
    
    return ( 
        <Box mt={4}>
            {genres.map(genre => (
                <Badge 
                    ml={2}
                    key={genre.id}
                    fontSize='1.2rem'
                    className='genre-bedge'
                    role='button'
                    onClick={() => navigate(`/movies?with_genres=${genre.id}`)}
                >
                {genre.name}
                </Badge>
            ))}
        </Box>
     );
}
 
export default GenresBedges;