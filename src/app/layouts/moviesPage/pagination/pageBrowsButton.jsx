import React from 'react';
import { Button } from '@chakra-ui/react';


const PageBrowsButton = ({children, isAble, handlePageChange, direction}) => {
    return ( 
        <Button 
            colorScheme='blackAlpha' 
            fontSize='1.5rem' 
            py={7}
            width='10rem'
            disabled={isAble}
            onClick={() => {
                handlePageChange(direction)
            }}
        > 
            {children}
        </Button>
     );
}
 
export default PageBrowsButton;