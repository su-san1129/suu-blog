const fetcher = async (url: string) => {
  const baseUrl = import.meta.env.VITE_BASE_API_URL || "http://localhost:8787";
  const response = await fetch(`${baseUrl}${url}`);
  const data = await response.json();
  return data;
};

export { fetcher };
