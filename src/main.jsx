import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router'
import Layout from './components/common/Layout.jsx'
import HomePage from './components/pages/HomePage'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <div>SORRY, THE PAGE COULD NOT BE FOUND.KINDLY CONFIRM THE URL.</div>,
      children: [
        {
          path: '/homePage',
          element: <HomePage />
        }
      ]
    }
  ]
)
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
  
)
