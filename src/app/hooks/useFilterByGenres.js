import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useFilterByGenres() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [selectedGenres, setSelectedGenres] = useState(
            searchParams.get('with_genres') ? 
            searchParams.get('with_genres').split(',').map(i => Number(i)) : [])

    useEffect(() => {
        setSearchParams((prev) => {
            if(!prev.has('with_genres') && !selectedGenres.length) {
                return {
                    ...Object.fromEntries(prev.entries())
                }
            }
            if(prev.get('with_genres') !== selectedGenres.join(',')) {
                return {
                    ...Object.fromEntries(prev.entries()),
                    page: 1,
                    with_genres: selectedGenres.join(',')
                }
            } else {
                return {
                    ...Object.fromEntries(prev.entries())
                }
            }
        })

        // eslint-disable-next-line
    }, [selectedGenres])

    const handleGenreFilter = (id) => {
        setSelectedGenres(
            selectedGenres.includes(id) ? 
            selectedGenres.filter(i => i !== id) : 
            [...selectedGenres, id]
        )
    }

    return {selectedGenres, handleGenreFilter}
}