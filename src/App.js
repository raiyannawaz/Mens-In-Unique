import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './Components/Navbar'
import ContextState from './ContextAPI/ContextState'
import Home from './Pages/Home'
import Collections from './Pages/Collections'
import Product from './Pages/Product'
import Wishlists from './Pages/Wishlists'
import Cart from "./Pages/Cart";
import Alert from './Components/Alert'

function App() {

  return (
    <ContextState>
      <Router>
        <Navbar />
        <Alert/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:filter" element={<Collections />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/wishlist" element={<Wishlists />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ContextState>
  );

}

export default App;
