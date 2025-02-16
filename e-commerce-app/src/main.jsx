import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePageMain from './RoutePages/HomePageMain.jsx'
import ProductDetailMain from './RoutePages/ProductDetailMain.jsx'
import CategoryMain from './RoutePages/CategoryMain.jsx'
import CartMain from './RoutePages/CartPageMain.jsx'
import App from './App.jsx'
import './index.css'
import ErrorPage from './Error.jsx'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "",
        element: <HomePageMain />,
      },
     
      {
        path: "/ProductDetails",
        element: <ProductDetailMain />,
      },
      {
        path: "/Category",
        element: <CategoryMain/>,
      },
      {
        path: "/Cart",
        element: <CartMain/>,
      },

    ]
  
  },

  {
    path: "*", 
    element: <ErrorPage />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
