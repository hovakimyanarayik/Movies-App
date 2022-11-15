import { useNavigate } from "react-router-dom"
import { scrollToTop } from "../utils"

export function useGoToMovie() {
    const navigate = useNavigate()
    return (id) => {
        return navigate(`/movies/${id}`) 
    }

}