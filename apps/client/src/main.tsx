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
import { AuthProvider } from './context/AuthProvider.tsx'
import AuthenticatedRoute from './components/auth/AuthenticatedRoute.tsx'
import Login from './components/auth/Login.tsx'

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
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <AuthenticatedRoute component={Dashboard} />,
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
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </SWRConfig>
  </React.StrictMode>
)
