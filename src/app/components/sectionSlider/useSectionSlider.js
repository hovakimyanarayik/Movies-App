import { chunk } from "lodash"
import { useEffect, useState } from "react"

function useResizeObserver(ref) {
    const [perSlide, setPerSlide] = useState(4)
    const observer = new ResizeObserver(entries => {
        entries.forEach(entrie => {
            setPerSlide(Math.floor(entrie.contentRect.width / 245))
        })
    })
    useEffect(() => {
        observer.observe(ref.current)
        return () => observer.disconnect(ref.current)
    }, [])
    return perSlide
}

export function useSectionSlider(ref, items) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const perSlide = useResizeObserver(ref)

    return {
        currentSlide,
        setCurrentSlide,
        perSlide,
        chunkedItems: chunk(items, perSlide)
    }
}