import './moviesPage/moviesPage.css'
import React, { Suspense, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Section from '../components/common/section';
import SectionsWrapper from '../components/common/sectionsWrapper';
import SearchSection from './moviesPage/searchAndFilter/searchSection';
import SectionLoader from '../components/loaders/sectionLoader';
import DataBase from '../database/database';
import Pagination from './moviesPage/pagination/pagination';
import { useParams } from 'react-router-dom';
import { scrollToTop } from '../utils';
import { useFilterByGenres } from './moviesPage/searchAndFilter/useFilterByGenres';
const MoviesList = React.lazy(() => import('./moviesPage/moviesList/moviesList'))


const Movies = () => {
    const [data, setData] = useState(null)
    const [options, setOptions] = useState({page: useParams().page ?? 1, genres: []})
    const {genres, handleGenreFilter} = useFilterByGenres(setOptions)

    useEffect(() => {
        DataBase.getMovies(options)
            .then(setData)
    }, [options])

    function handlePageChange(page) {
        setOptions({...options, page: page})
        scrollToTop()
    }

    function handleMovieSearch(query) {
        DataBase.searchMovies(query)
        .then(setData)
    }
    
    return ( 
        <div className='layout'>
            <SectionsWrapper>
                {genres && 
                    <Section title='Search Movies'  icon={<FaSearch size={20} />}>
                        <SearchSection 
                            onSearch={handleMovieSearch} 
                            genres={genres} 
                            handleGenreFilter={handleGenreFilter} 
                        />
                    </Section>
                }
                {data && <>
                        <Suspense fallback={<SectionLoader />}>
                            <MoviesList data={data.results} />
                        </Suspense>
                        <Pagination totalPages={data.total_pages} onPageChange={handlePageChange} currentPage={data.page} />
                    </>
                }
            </SectionsWrapper>
        </div>
     );
}
 
export default Movies;