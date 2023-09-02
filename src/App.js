import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import HomePage from './layouts/HomePage'
import BrowsingPage from './layouts/BrowsingPage';
import CartPage from './layouts/CartPage';
import ProductDetailPage from './layouts/ProductDetailPage.js';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browsing" element={<BrowsingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
