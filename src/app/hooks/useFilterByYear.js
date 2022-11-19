import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

function generateMovieYears() {
  const minYear = 1900;
  const maxYear = new Date().getFullYear();
  return new Array(maxYear - minYear + 1)
    .fill("")
    .map((i, idx) => minYear + idx)
    .reverse();
}

export function useFilterByYears() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedYear, setSelectedYear] = useState(
    searchParams.get("year") || ""
  );
  const years = useMemo(() => generateMovieYears(), []);

  useEffect(() => {
    setSearchParams((prevParams) => {
      if(!prevParams.has('year') && selectedYear === '') {
        return {
          ...Object.fromEntries(prevParams.entries())
        }
      }
      return {
        ...Object.fromEntries(prevParams.entries()),
        ...(prevParams.get("year") !== selectedYear && { page: 1 }),
        year: selectedYear,
        }
    });

    // eslint-disable-next-line
  }, [selectedYear]);

  function handleChange({ target }) {
    setSelectedYear(target.value);
  }

  return { years, selectedYear, handleChange };
}
