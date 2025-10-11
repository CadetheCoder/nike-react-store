import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home/HomePage.jsx';
import Shoes from './pages/Shoes/Shoes.jsx';
import Socks from './pages/Socks/Socks.jsx';
import Slides from './pages/Slides/Slides.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import Cart from './pages/Cart/Cart.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "/shoes", element: <Shoes /> },
          { path: "/socks", element: <Socks /> },
          { path: "/slides", element: <Slides /> },
          { path: "/checkout", element: <Checkout /> },
          { path: "/cart", element: <Cart /> },
          { path: "/product/:id", element: <ProductPage /> },
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
