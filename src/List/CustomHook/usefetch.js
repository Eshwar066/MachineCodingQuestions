import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(false);
    async function fetchapi() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log(">>response", result);
      } catch (error) {
        setError(error);
        console.log(">>error", error);
      } finally {
        setLoading(false);
      }
    }
    fetchapi();
  }, [url]);

  return data;
}
