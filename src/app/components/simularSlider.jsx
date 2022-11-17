import React, { useState, useEffect} from 'react';
import DataBase, { endpoints } from '../database/database';
import SectionLoader from './loaders/sectionLoader';
import SectionSlider from './sectionSlider/sectionSlider';


const SimularMoviesSlider = ({id}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        DataBase.get(endpoints.similar(id))
            .then(data => setData(data.results))
    }, [id])

    if(!data) return (
        <SectionLoader />
    )
    return (
        <SectionSlider data={data} />
     );
}
 
export default SimularMoviesSlider;