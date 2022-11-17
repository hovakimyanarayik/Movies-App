import React, { useState, useEffect} from 'react';
import DataBase, { endpoints } from '../database/database';
import SectionLoader from './loaders/sectionLoader';
import SectionSlider from './sectionSlider/sectionSlider';


const RecomendationsSlider = ({id}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        DataBase.get(endpoints.recomendations(id))
            .then(data => setData(data.results))
    }, [id])

    if(!data) return (
        <SectionLoader />
    )
    return (
        <SectionSlider data={data} />
     );
}
 
export default RecomendationsSlider;