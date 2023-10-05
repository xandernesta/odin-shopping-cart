import { useEffect, useState } from "react";

export function useFetch(url, fetchOptions, dependencies = null) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  

  useEffect(() => {
    let isMounted = true;

    async function fetchData(url, options = {}) {
      if (!isLoading || error) {
        setIsLoading(true);
        setError(null);
      }

      try {
        const res = await fetch(url, {
          ...options,
        });

        if (res.ok === false) throw new Error({ code: res.code, msg: res.message });

        const data = await res.json();
        setData(data);
      } catch (err) {
        if (!isMounted) return;

        console.error(err);
        setError(err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchData(url, fetchOptions);

    return () => {
      isMounted = false;
    };
  },  [url] || dependencies);

  const anticipateFetch = () => {
    setIsLoading(true);
    setError(null);
  };

  return [isLoading, error, data, anticipateFetch];
}