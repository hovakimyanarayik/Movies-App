import { Center, Heading } from '@chakra-ui/react';
import React from 'react';
import Section from '../components/common/section';
import SectionsWrapper from '../components/common/sectionsWrapper';


const ErrorPage = () => {

    return ( 
        <div className="layout">
            <SectionsWrapper>
                <Section title='Error'>
                    <Center mt={10}>
                        <Heading>Page is not found...</Heading>
                    </Center>
                </Section>
            </SectionsWrapper>
            
        </div>
     );
}
 
export default ErrorPage;