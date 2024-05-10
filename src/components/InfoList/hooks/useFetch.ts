import { useState } from "react";

const useFetch = (url: string, method: "POST" | "GET", body?: any | null) => {
  const [data, setData] = useState<Record<string, string | number>[]>([]);

  const fetchData = async () => {
    const options: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (method === "POST" && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const resData = await response.json();
    console.log(resData);

    setData(resData);
  };

  fetchData();

  return data;
};

export default useFetch;
