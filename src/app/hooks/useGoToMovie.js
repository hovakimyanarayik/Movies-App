import { useNavigate } from "react-router-dom"

export function useGoToMovie() {
    const navigate = useNavigate()
    return (id) => navigate(`/movies/${id}`) 
}