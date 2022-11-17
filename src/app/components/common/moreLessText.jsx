import { Text } from '@chakra-ui/react';
import React, { useState } from 'react';


const MoreLessText = ({fontSize, lessCharts, children, className}) => {
    const [isMore, setIsMore] = useState(false)
    const toggler = () => setIsMore(!isMore)

    if(children.length - 10 < lessCharts) return (
        <Text 
        fontSize={fontSize} 
        className={className}
    >
        {children}
    </Text>
    )
    return (
        <Text 
            fontSize={fontSize} 
            className={className}
            role='button'
            onClick={toggler}
        >
            {isMore ? children : children.slice(0, lessCharts) + '...'}
            <Text 
                as='span' 
                fontSize={fontSize} 
                color='#5858c8' 
                textDecor='underline' 
                ml='1rem'
            >
                {isMore ? 'Less' : 'More'}
            </Text> 
        </Text>
    )
}


MoreLessText.defaultProps = {
    fontSize: '1.6rem',
    lessCharts: 100
}
 
export default MoreLessText;