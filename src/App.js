import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import HomePage from './layouts/HomePage'
import BrowsingPage from './layouts/BrowsingPage';
import CartPage from './layouts/CartPage';
import ProductDetailPage from './layouts/ProductDetailPage.js';
import ProductManagerPage from './layouts/ProductManagerPage.js';
import SellerLoginPage from "./layouts/SellerLoginPage";

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
          </Routes>
        </Router>
      </ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/product-manager" element={<ProductManagerPage />} />
          <Route path="/seller-login" element={<SellerLoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
