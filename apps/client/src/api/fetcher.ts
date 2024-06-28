const baseUrl = import.meta.env.VITE_BASE_API_URL || 'http://localhost:8787'
const createUrl = (endpoint: string) =>
  endpoint.startsWith('/') ? `${baseUrl}/api${endpoint}` : `${baseUrl}/api/${endpoint}`

const fetcher = async (endpoint: string) => {
  const response = await fetch(createUrl(endpoint))
  const data = await response.json()
  return data
}

const post = (endpoint: string, value: any, headers?: object) => {
  return fetch(createUrl(endpoint), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(value),
  })
}

const del = (endpoint: string, value: any, headers?: object) => {
  return fetch(createUrl(`${endpoint}/${value}`), {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  })
}

export { fetcher, post, del }
