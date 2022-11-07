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

const MoviesList = React.lazy(() => import('./moviesPage/moviesList/moviesList'))

const Movies = () => {
    const [data, setData] = useState(null)
    const [options, setOptions] = useState({page: useParams().page ?? 1, genres: []})

    useEffect(() => {
        DataBase.getMovies(options)
            .then(setData)
    }, [options])
    function handlePageChange(page) {
        setOptions({...options, page: page})
        scrollToTop()
    }
    function handleFilterChange(id) {
        setOptions({
            page: 1,
            genres: options.genres.includes(id) ? 
                        options.genres.filter(item => item !== id) :
                        [...options.genres, id]
        })
    }

    console.log( 'options', options);
    console.log('data' ,data);
    return ( 
        <div className='layout'>
            <SectionsWrapper>
                <Section title='Search Movies'  icon={<FaSearch size={20} />}>
                    <SearchSection handleFilterChange={handleFilterChange} />
                </Section>
                {data && <>
                        <Suspense fallback={<SectionLoader />}>
                            <MoviesList data={data.results} />
                        </Suspense>
                        <Pagination totalPages={data.total_pages} onPageChange={handlePageChange} currentPage={data.page} />
                    </>
                }
                {/* pagination pti lini pti mtacvi dataic kaxvac tal u inch dzev */}
            </SectionsWrapper>
        </div>
     );
}
 
export default Movies;