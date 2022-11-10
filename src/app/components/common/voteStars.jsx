import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';


const VoteStars = ({votes , size}) => {
    if(votes > 10) return;

    return ( 
        <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
                .fill('')
                .map((_, i) => (
                <StarIcon
                    boxSize={size}
                    key={i}
                    color={i < Math.round(votes / 2) ? 'teal.500' : 'gray.300'}
                />
                ))}
        </Box>
     );
}

VoteStars.defaultProps = {
    votes: 10,
    size: 7
}
 
export default VoteStars;