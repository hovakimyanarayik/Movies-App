import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Section from '../components/common/section';
import SectionsWrapper from '../components/common/sectionsWrapper';
import SectionLoader from '../components/loaders/sectionLoader';
import SimularMoviesSlider from '../components/simularSlider';
import DataBase, { endpoints } from '../database/database';
import { scrollToTop } from '../utils';
import MovieCredits from './singleMoviePage/credits/movieCredits';
import MoviePoster from './singleMoviePage/moviePoster/moviePoster';
import { GoMirror, GoStar } from 'react-icons/go'
import RecomendationsSlider from '../components/recomendationsSlider';
import MovieVideo from './singleMoviePage/movieVideo/MovieVideo';


const SignleMovie = () => {
    const [data, setData] = useState(null)
    const movieId = useParams().slug
    
    useEffect(() => {
        DataBase.get(endpoints.byId(movieId))
        .then(setData)
        scrollToTop()
    }, [movieId])
    if(!data) return (
        <div className="layout">
            <SectionLoader />
        </div>
    )
    return ( 
        <div className="layout">
            <MoviePoster data={data} />
            <SectionsWrapper>
                <MovieVideo id={movieId} />
                <MovieCredits id={movieId} />
                <Section title={'Recomendations'} icon={<GoStar size={25} />} >
                    <RecomendationsSlider id={movieId} />
                </Section>
                <Section title={'Similar Movies'} icon={<GoMirror size={25} />} >
                    <SimularMoviesSlider id={movieId} />
                </Section>
            </SectionsWrapper>
        </div>
     );
}
 
export default SignleMovie;