import { chunk } from "lodash"
import { useEffect, useState } from "react"

function useResizeObserver(ref) {
    const [perSlide, setPerSlide] = useState(4)
    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            entries.forEach(entrie => {
                if(entrie.contentRect.width < 500) {
                    setPerSlide(2)
                } else {
                    setPerSlide(Math.trunc(entrie.contentRect.width / 245))
                }
                
            })
        })
        observer.observe(ref.current)
        return () => observer.disconnect(ref.current)
    }, [])
    return perSlide
}

export function useSectionSlider(ref, items) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const perSlide = useResizeObserver(ref)

    useEffect(() => {
        setCurrentSlide(0)
    }, [perSlide])

    const chunkedItems = chunk(items, perSlide);

    function handleBrowse(direction) {
        if(direction === 'right' && currentSlide + 1 < chunkedItems.length) {
            setCurrentSlide(currentSlide + 1)
        } else if(direction === 'left' && currentSlide - 1 >= 0) {
            setCurrentSlide(currentSlide - 1)
        } else {
            return
        }
    }

    return {
        currentSlide,
        handleBrowse,
        perSlide,
        chunkedItems
    }
}