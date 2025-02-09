import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './Home.jsx'
import App from './App.jsx'
import ErrorPage from './Error.jsx'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/home",
        element: <Homepage />,
      },

    ]
  
  },

  {
    path: "*", // Catch-all for non-existent routes
    element: <ErrorPage />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
