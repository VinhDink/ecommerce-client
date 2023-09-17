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
import CreateProduct from "./pages/seller/CreateProduct";
import OrderManagerPage from "./layouts/OrderManagerPage.js";
import SellerRegisterPage from "./layouts/SellerRegisterPage"
import CustomerOrderManagerPage from "./layouts/CustomerOrderManagerPage";
import PrivateRoute from "./components/PrivateRoute";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browsing" element={<BrowsingPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/customer-order-manager" element={<CustomerOrderManagerPage />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
            <Route path="browsing/product/:id" element={<ProductDetailPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Router>
        <Fragment>
        <Routes>
        <Route path="/" element={<PrivateRoute />}>
              <Route exact path='/order-manager' element={<OrderManagerPage/>}/>
              <Route path="/product-manager" element={<ProductManagerPage />} />
              <Route path="/create-product" element={<CreateProduct />} />
            </Route> 
          <Route path="/seller-login" element={<SellerLoginPage />} />
          <Route path="/seller-register" element={<SellerRegisterPage />} />
        </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
