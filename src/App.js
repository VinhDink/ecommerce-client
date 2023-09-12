import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import HomePage from './layouts/HomePage'
import BrowsingPage from './layouts/BrowsingPage';
import CartPage from './layouts/CartPage';
import ProductDetailPage from './layouts/ProductDetailPage.js';
import ProductManagerPage from './layouts/ProductManagerPage.js';
import SellerLoginPage from "./layouts/SellerLoginPage";
import Login from "./pages/common/Login";
import Register from "./pages/common/Register";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browsing" element={<BrowsingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="browsing/product/:id" element={<ProductDetailPage />} />
            <Route path="/product-manager" element={<ProductManagerPage />} />
            <Route path="/seller-login" element={<SellerLoginPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
