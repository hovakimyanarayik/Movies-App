import { ArrowUpIcon, TimeIcon } from '@chakra-ui/icons';
import React from 'react';
import Section from '../components/common/section';
import SectionsWrapper from '../components/common/sectionsWrapper';
import PopularSlider from '../components/trandingSlider/slider';
import TopRatedSlider from '../components/topRatedSlider';
import UpcomingSlider from '../components/upcomingSlider';


const Home = () => {

    return ( 
        <div className='layout'>
            <PopularSlider />
            <SectionsWrapper>
                <Section title={'Upcoming Movies'} icon={<TimeIcon fontSize={30} />}>
                    <UpcomingSlider />
                </Section>
                <Section title={'Top Rated'} icon={<ArrowUpIcon fontSize={30} />}>
                    <TopRatedSlider />
                </Section>
            </SectionsWrapper>
        </div>
     );
}
 
export default Home;