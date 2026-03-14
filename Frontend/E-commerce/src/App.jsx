import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";

import { AuthContext } from "./context/AuthContext";

function App() {

  const { user, logout } = useContext(AuthContext);

  return (
    <div className="d-flex flex-column min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            My E-Commerce
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/wishlist">Wishlist</Link>
              </li>

              {/* Orders visible only if logged in */}
              {user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">Orders</Link>
                </li>
              )}

              {!user ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light ms-2"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              )}

            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1 container mt-4">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/wishlist" element={<Wishlist />} />

          {/* Product Details */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Orders */}
          <Route path="/orders" element={<Orders />} />

          {/* Fallback route */}
          <Route path="*" element={<Home />} />

        </Routes>

      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        © 2026 My E-Commerce. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;