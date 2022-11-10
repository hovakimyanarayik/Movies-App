import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SectionLoader from '../components/loaders/sectionLoader';
import DataBase, { endpoints } from '../database/database';
import MoviePoster from './singleMoviePage/moviePoster';


const SignleMovie = () => {
    const [data, setData] = useState(null)
    const movieId = useParams().slug
    
    useState(() => {
        DataBase.get(endpoints.byId(movieId))
        .then(setData)
    }, [])
    if(!data) return (
        <div className="layout">
            <SectionLoader />
        </div>
    )
    return ( 
        <div className="layout">
            <MoviePoster data={data} />
        </div>
     );
}
 
export default SignleMovie;