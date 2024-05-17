const baseUrl =
  `${import.meta.env.VITE_BASE_API_URL}/api` || "http://localhost:8787/api";
const createUrl = (endpoint: string) =>
  endpoint.startsWith("/") ? `${baseUrl}${endpoint}` : `${baseUrl}/${endpoint}`;

const fetcher = async (endpoint: string) => {
  const response = await fetch(createUrl(endpoint));
  const data = await response.json();
  return data;
};

const post = (endpoint: string, value: any) => {
  return fetch(createUrl(endpoint), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
};

export { fetcher, post };
