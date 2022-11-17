import React from 'react';
import { ViewIcon } from '@chakra-ui/icons';
import { Button, Divider, Text } from '@chakra-ui/react';
import { formateDate } from '../../utils';



const SliderContent = ( {data, goToMovie} ) => {

    return ( 
        <div className="slider-content">
            <h1>{data.title}</h1>
            <p>{formateDate(data.release_date)}</p>
            <Divider />
            <Button 
                colorScheme='red' 
                fontSize='1.5rem' 
                mt='10px' 
                px={10} py={5} 
                variant='outline'
                title='Watch' 
                onClick={() => {
                    goToMovie(data.id)
                }}
            >
                    <ViewIcon fontSize='16px' mr='10px' />
                Watch
            </Button>
        </div>
     );
}
 
export default SliderContent;