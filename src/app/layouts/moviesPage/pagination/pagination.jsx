import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
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
                <PageBrowsButton 
                    handlePageChange={handlePageChange} 
                    direction='prev'
                    isAble={isButtonAble('prev')}
                >
                    <ChevronLeftIcon fontSize={30} />
                    Previous
                </PageBrowsButton>
            <h1>{currentPage} of {pagesCount}</h1>
                <PageBrowsButton 
                    handlePageChange={handlePageChange} 
                    direction='next'
                    isAble={isButtonAble('next')}
                >
                    Next
                    <ChevronRightIcon fontSize={30} />
                </PageBrowsButton>
            
        </div>
     );
}
 
export default Pagination;