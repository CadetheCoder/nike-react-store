import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";
import Layout from "./Layout";
import Shoes from "./pages/Shoes/shoes";
import Socks from "./pages/Socks/socks";
import Sale from "./pages/Sale/sale";
import ProductPage from "./pages/ProductPage/productPage";
import Home from "./pages/Home/home";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/socks" element={<Socks/>}></Route>
          <Route path="/sale" element={<Sale/>}></Route>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product/:id" element={<ProductPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
