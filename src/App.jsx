import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Layout from "./Layout";
import Shoes from "./pages/Shoes/Shoes.jsx";
import Socks from "./pages/Socks/Socks.jsx";
import Slides from "./pages/Slides/Slides.jsx"
import ProductPage from "./pages/ProductPage/productPage.jsx";
import Home from "./pages/Home/Home.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/shoes" element={<Shoes/>}/>
            <Route path="/socks" element={<Socks/>}></Route>
            <Route path="/slides" element={<Slides/>}></Route>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
