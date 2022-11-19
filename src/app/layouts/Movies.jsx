import './moviesPage/moviesPage.css'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Section from '../components/common/section';
import SectionsWrapper from '../components/common/sectionsWrapper';
import SearchSection from './moviesPage/searchAndFilter/searchSection';
import SectionLoader from '../components/loaders/sectionLoader';
import DataBase, { endpoints } from '../database/database';
import Pagination from './moviesPage/pagination/pagination';
import { scrollToTop } from '../utils';
import MoviesList from './moviesPage/moviesList/moviesList';

const Movies = () => {
    const [data, setData] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        scrollToTop()
        document.title = 'Movies'
    }, [data])
    useEffect(() => {
        DataBase.get(endpoints.all(), Object.fromEntries(searchParams.entries()))
            .then(setData)
    }, [searchParams])

    function handlePageChange(page) {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            page: page
        })
    }

    function handleMovieSearch(query) {
        setSearchParams({...query})
    }
    return ( 
        <div className='layout'>
            <SectionsWrapper>
                    <Section title='Search Movies'  icon={<FaSearch size={20} />}>
                        <SearchSection onSearch={handleMovieSearch} />
                    </Section>
                {data ? <>
                            <MoviesList data={data.results} />
                            <Pagination totalPages={data.total_pages} onPageChange={handlePageChange} currentPage={data.page} />
                        </>
                    : <SectionLoader />
                }
            </SectionsWrapper>
        </div>
     );
}
 
export default Movies;