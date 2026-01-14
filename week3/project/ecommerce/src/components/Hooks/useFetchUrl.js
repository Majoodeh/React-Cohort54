import React, { useState, useEffect } from "react";

function useFetchUrl(url) {
  if (!url) {
    throw new Error("URL is required");
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        if (typeof url === "string") {
          const response = await fetch(url);

          if (!response.ok) {
            setError("Failed to get products");
          }
          const fetchedData = await response.json();
          setData(fetchedData);
          setLoading(false);
        } else if (typeof url === "object") {
          const allResponses = await Promise.all(
            url.map((urlItem) => fetch(urlItem))
          );

          const allFetchedData = await Promise.all(
            allResponses.map(async (response) => {
              if (!response.ok) {
                setError("Failed to get products");
              }
              return await response.json();
            })
          );
          setData(allFetchedData);
          setLoading(false);
        }

        console.log(data);
      } catch (error) {
        setError("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchUrl;
