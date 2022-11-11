import React from 'react';
import SectionSliderItem from './sectionSliderItem';


const SectionSliderPage = ({ data, goToMovie }) => {
    return ( 
        <div className='section-slider-page'>
            {data.map(item => <SectionSliderItem key={item.id} goToMovie={goToMovie} data={item} />)}
        </div>
     );
}
 
export default SectionSliderPage;