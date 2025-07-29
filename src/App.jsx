import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Layout from "./Layout";
import Shoes from "./pages/shoes";
import Socks from "./pages/socks";
import Sale from "./pages/sale";

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
        </Route>
      </Routes>
    </Router>
  )
}

export default App
