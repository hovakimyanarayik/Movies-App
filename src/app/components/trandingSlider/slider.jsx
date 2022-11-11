import './slider.css'
import React, { useState, useEffect } from 'react';
import DataBase, { endpoints } from '../../database/database';
import SliderItem from './sliderItem';
import { useSlider } from '../../hooks/useSlider';
import { useGoToMovie } from '../../hooks/useGoToMovie';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import SliderBrowser from '../common/sliderBrowser';
import SectionLoader from '../loaders/sectionLoader';


const TrandingSlider = () => {
    const [sliderItems, setSliderItems] = useState(null)
    const [currentSlide, setCurrentSlide] = useSlider()
    const goToMovie = useGoToMovie()

    useEffect(() => {
        DataBase.get(endpoints.trending())
        .then(data => setSliderItems(data.results.slice(0, 10)))
    }, [])

    function handleBrowse(direction) {
        if(direction === 'left') {
            setCurrentSlide(currentSlide - 1)
            return;
        }
        setCurrentSlide(currentSlide + 1)
    }

    if(!sliderItems) return (
        <SectionLoader />
    )
    
    return ( 
        <div className="slider-wrapper" >
            <div className="slider" style={{marginLeft: `-${currentSlide * 100}vw`}}>
                {sliderItems && sliderItems.map(item => <SliderItem key={item.id} goToMovie={goToMovie} data={item} />)}
            </div>
            {currentSlide > 0 && <SliderBrowser onClick={handleBrowse} direction={'left'}>
                <ChevronLeftIcon fontSize={30} />
            </SliderBrowser>}
            {currentSlide < 8 && <SliderBrowser onClick={handleBrowse} direction={'right'}>
                <ChevronRightIcon fontSize={30} />
            </SliderBrowser>}
        </div>
     );
}
 
export default TrandingSlider;