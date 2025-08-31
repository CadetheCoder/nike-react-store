import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/cart";
import Layout from "./Layout";
import Shoes from "./pages/Shoes/shoes";
import Socks from "./pages/Socks/Socks";
import Slides from "./pages/Slides/Slides"
import ProductPage from "./pages/ProductPage/productPage";
import Home from "./pages/Home/Home";
import { CartProvider } from "./context/CartContext";

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
