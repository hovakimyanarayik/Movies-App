import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DataBase, { endpoints } from '../database/database';
import SectionLoader from './loaders/sectionLoader';
import SectionSlider from './sectionSlider/sectionSlider';


const PopularSlider = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        DataBase.get(endpoints.popular())
            .then(data => setData(data.results))
    }, [])

    if(!data) return (
        <SectionLoader />
    )
    return (
        <SectionSlider data={data} />
     );
}
 
export default PopularSlider;