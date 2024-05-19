import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import Dashboard from './pages/Dashboard.tsx'
import NewArticle from './components/dashboard/new/NewArticle.tsx'
import ArticleList from './components/article/ArticleList.tsx'
import Article from './components/article/Article.tsx'
import { fetcher } from './api/fetcher.ts'
import { SWRConfig } from 'swr'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ArticleList />,
      },
      {
        path: 'articles/:id',
        element: <Article />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'new',
        element: <NewArticle />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <RouterProvider router={router} />
    </SWRConfig>
  </React.StrictMode>
)
