export const regularFetch = async (
  url: string,
  met: "POST" | "GET" | "DELETE",
  body: any | null
) => {
  const response = fetch(
    `https://663e14b8e1913c4767967255.mockapi.io/${url}/`,
    {
      signal: AbortSignal.timeout(60000),
      headers: {
        "Content-Type": "application/json",
      },
      method: met,
      body: body && JSON.stringify(body),
    }
  )
    .then(async (res: any) => {
      return res
        .json()
        .then((data: any) => {
          return data;
        })
        .catch((err: any) => {
          console.log(err);
          return "error";
        });
    })
    .catch((err) => {
      console.log(err);
      return "error";
    });

  return response;
};
