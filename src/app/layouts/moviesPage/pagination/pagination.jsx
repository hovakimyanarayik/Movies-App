import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import PageBrowsButton from './pageBrowsButton';



const Pagination = ({totalPages, currentPage, onPageChange}) => {
    const pagesCount = totalPages > 500 ? 500 : totalPages

    function isButtonAble(direction) {
        if(direction === 'prev' && currentPage > 1) return false
        if(direction === 'next' && currentPage < pagesCount) return false
        return true
    }

    function handlePageChange(direction) {
        onPageChange(direction === 'prev' ? currentPage - 1 : currentPage + 1)
    }

    if(totalPages === 0) return null
    return ( 
        <div className='pages-wrapper'>
            <Link to={`/movies/${currentPage - 1}`} >
                <PageBrowsButton 
                    handlePageChange={handlePageChange} 
                    direction='prev'
                    isAble={isButtonAble('prev')}
                >
                    <ChevronLeftIcon fontSize={30} />
                    Previous
                </PageBrowsButton>
            </Link>
            <h1>{currentPage} of {pagesCount}</h1>
            <Link to={`/movies/${currentPage + 1}`} >
                <PageBrowsButton 
                    handlePageChange={handlePageChange} 
                    direction='next'
                    isAble={isButtonAble('next')}
                >
                    Next
                    <ChevronRightIcon fontSize={30} />
                </PageBrowsButton>
            </Link>
            
        </div>
     );
}
 
export default Pagination;