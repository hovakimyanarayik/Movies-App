import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export function useGoToMovie() {
    const navigate = useNavigate()
    return useCallback((id) => {
        return navigate(`/movies/${id}`) 

        // eslint-disable-next-line
    }, [])

}