import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function fetchData({ params } = {}) {
    setIsLoading(true);
    setError(null);

    try {
      const searchParams = new URLSearchParams(params);
      const req = params ? `${url}?${searchParams}` : url;

      const request = await fetch(req);
      const data = await request.json();
      setData(data);

      if (!request.ok) {
        throw new Error("Request failed with status " + request.status);
      }
    } catch (e) {
      setIsLoading(false);
      setError(e);
      setData(null);
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data: error ? null : data,
    isLoading,
    error,
    refetch: fetchData,
  };
};
