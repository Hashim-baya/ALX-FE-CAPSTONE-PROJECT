import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router'
import Layout from './components/common/Layout.jsx'
import HomePage from './components/pages/HomePage'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import Trending from './components/pages/Trending.jsx'
import TvSeries from './components/pages/TvSeries.jsx'
import Movies from './components/pages/Movies.jsx'
import TvShows from './components/pages/TvShows.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>SORRY, THE PAGE COULD NOT BE FOUND.KINDLY CONFIRM THE URL.</div>,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/trending',
          element: <Trending />
        },
        {
          path: '/tvSeries',
          element: <TvSeries />
        },
        {
          path: '/movies',
          element: <Movies />
        },
        {
          path: '/tvShows',
          element: <TvShows />
        },
      ]
    }
  ]
)

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <StrictMode>
        <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StrictMode>,
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  
  
)
