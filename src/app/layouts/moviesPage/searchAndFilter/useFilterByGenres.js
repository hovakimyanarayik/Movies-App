import { useEffect, useState } from "react"
import DataBase, { endpoints } from "../../../database/database"

export function useFilterByGenres(setOptions) {
    const [genres, setGenres] = useState(null)

    useEffect(() => {
        DataBase.get(endpoints.genres())
            .then((response) => {
                setGenres(response.genres.map(item => {
                    item.selected = false
                    return item
                }))
            })
    }, [])

    function handleGenreFilter(id) {
        setGenres(prev => prev.map(item => {
            if(item.id === id) {
                item.selected = !item.selected
            }
            return item
        }))
    }

    useEffect(() => {
        if(!genres) return
        setOptions({
            page: 1,
            with_genres: genres.filter(item => item.selected).map(item => item.id)
        })
    }, [genres])
    return {genres, handleGenreFilter}
}