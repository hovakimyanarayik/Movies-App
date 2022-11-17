import React, { useEffect } from 'react';
import Section from '../components/common/section';
import SectionsWrapper from '../components/common/sectionsWrapper';
import TrandingSlider from '../components/trandingSlider/slider';
import TopRatedSlider from '../components/topRatedSlider';
import UpcomingSlider from '../components/upcomingSlider';
import PopularSlider from '../components/popularSlider';
import { FaArrowUp, FaClock, FaStar } from 'react-icons/fa'
import { scrollToTop } from '../utils';


const Home = () => {
    useEffect(scrollToTop)
    
    return ( 
        <div className='layout'>
            <TrandingSlider />
            <SectionsWrapper>
                <Section title={'Upcoming Movies'} icon={<FaClock size={25}/>}>
                    <UpcomingSlider />
                </Section>
                <Section title={'Top Rated'}  icon={<FaStar size={25} />}>
                    <TopRatedSlider />
                </Section>
                <Section title={'Popular Movies'} icon={<FaArrowUp size={25}/>}>
                    <PopularSlider />
                </Section>
            </SectionsWrapper>
        </div>
     );
}
 
export default Home;