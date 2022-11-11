import './sectionSlider.css'
import React, { useRef, useEffect } from 'react';
import { useSectionSlider } from '../../hooks/useSectionSlider';
import { useGoToMovie } from '../../hooks/useGoToMovie';
import { calcMargin } from '../../utils';
import SectionSliderPage from './sectionSliderPage';
import SliderBrowser from '../common/sliderBrowser';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


const SectionSlider = ({data}) => {    
    const wrapperRef = useRef()
    const {currentSlide, setCurrentSlide, perSlide, chunkedItems} = useSectionSlider(wrapperRef, data)
    const goToMovie = useGoToMovie()

    useEffect(() => {
        setCurrentSlide(0)
    }, [perSlide])

    function handleBrowse(direction) {
        if(direction === 'right' && currentSlide + 1 < chunkedItems.length) {
            setCurrentSlide(currentSlide + 1)
        } else if(direction === 'left' && currentSlide - 1 >= 0) {
            setCurrentSlide(currentSlide - 1)
        } else {
            return
        }
    }

    return ( 
        <div className="section-slider-wrapper" ref={wrapperRef}>
            <div className="section-slider" style={{marginLeft: `${calcMargin(currentSlide, perSlide)}`}}>
                {chunkedItems.map((chunk, idx) => (
                    <SectionSliderPage key={idx} data={chunk} goToMovie={goToMovie} />
                ))}
            </div>
            {currentSlide > 0 && <SliderBrowser onClick={handleBrowse} direction={'left'}>
                <ChevronLeftIcon fontSize={25} />
            </SliderBrowser>}
            {(currentSlide+1) * perSlide < data.length && <SliderBrowser onClick={handleBrowse} direction={'right'}>
                <ChevronRightIcon fontSize={25} />
            </SliderBrowser>}
        </div>
     );
}
 
export default SectionSlider;