import React from 'react';
import { useFilterByYears } from '../../../../hooks/useFilterByYear';
import { Select } from '@chakra-ui/react';


const FilterByYear = () => {
    const {years, selectedYear, handleChange} = useFilterByYears()

    return (
        <Select
            mt={3}
            width='60%'
            color='black' 
            backgroundColor='white' 
            fontSize='2xl' 
            placeholder='Year'
            onChange={handleChange}
            value={selectedYear}    
        >
            {years.map(year => <option className='option' key={year} value={year}>{year}</option>)}
        </Select>

     );
}

export default FilterByYear;