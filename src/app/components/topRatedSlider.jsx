import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataBase, { endpoints } from '../database/database';
import SectionLoader from './loaders/sectionLoader';
import SectionSlider from './sectionSlider/sectionSlider';


const TopRatedSlider = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        DataBase.get(endpoints.top_rated())
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