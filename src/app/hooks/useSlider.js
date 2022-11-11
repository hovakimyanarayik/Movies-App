import { useEffect, useState } from "react"

export function useSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    if(currentSlide >= 9 || currentSlide < 0) {
        setCurrentSlide(0)
    }
    function browseSlider() {
        setCurrentSlide(prev => prev + 1)
    }
    useEffect(() => {
        const id = setInterval(() => {
            browseSlider()
        }, 10000)

        return () => {clearInterval(id)}
    }, [])

    return [currentSlide, setCurrentSlide]
}