import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataBase from '../database/database';
import SectionLoader from './loaders/sectionLoader';
import SectionSlider from './sectionSlider/sectionSlider';


const TopRatedSlider = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        DataBase.getTopRatedMovies()
            .then(data => setData(data.results))
    }, [])

    if(!data) return (
        <SectionLoader />
    )
    return (
        <SectionSlider data={data} />
     );
}
 
export default TopRatedSlider;