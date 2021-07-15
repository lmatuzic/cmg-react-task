import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    
    const getData = async () => {
      try {
        const response =  await fetch(url, { signal: abortController.signal });
        const data = await response.json();
        setData(data);
        setError(null);
        console.log(data);
      } catch(err) {
        setError(err);
        setData(null);
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();

    return () => {
      abortController.abort();
    }
  }, [url])

  return { data, error, isLoading };
};
