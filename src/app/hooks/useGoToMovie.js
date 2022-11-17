import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { scrollToTop } from "../utils"

export function useGoToMovie() {
    const navigate = useNavigate()
    return useCallback((id) => {
        return navigate(`/movies/${id}`) 
    }, [])

}