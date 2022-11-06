import React from 'react';
import SectionSliderItem from './sectionSliderItem';


const SectionSliderPage = ({ data }) => {
    return ( 
        <div className='section-slider-page'>
            {data.map(item => <SectionSliderItem key={item.id} data={item} />)}
        </div>
     );
}
 
export default SectionSliderPage;