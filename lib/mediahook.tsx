import { useState, useEffect } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  const checkMediaQuery = () => {
    const matchQueryList = window.matchMedia(query);
    setMatches(matchQueryList.matches);
  };

  useEffect(() => {
    // Check media query on component mount
    checkMediaQuery();

    // Listen for changes in media query
    const matchQueryList = window.matchMedia(query);
    function handleChange(e: { matches: boolean }) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
  