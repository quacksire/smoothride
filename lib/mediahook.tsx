'use client'
import { useState, useEffect } from "react";

export function useMediaQuery(query: String) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    // @ts-ignore
    const matchQueryList = window.matchMedia(query);
    function handleChange(e: { matches: boolean | ((prevState: boolean) => boolean); }) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}
