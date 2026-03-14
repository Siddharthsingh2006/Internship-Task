import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get("http://localhost:8080/api/products")
      .then((res) => {
        setProducts(res.data || []);
        setLoading(false);
        console.log(res.data);
        
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Add to cart
  const handleAddToCart = (product) => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }
    addToCart(product);
    alert("Item added to cart");
  };

  // Add to wishlist
  const handleAddToWishlist = (product) => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }
    addToWishlist(product);
    alert("Item added to wishlist");
  };

  // Filter products by category and search
  const filteredProducts = products
    .filter((p) => category === "all" || p?.category === category)
    .filter((p) => p?.title?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-4 flex-grow-1">
        <h2 className="text-center mb-4">Ecommerce Products</h2>

        {/* Search Input */}
        <input
          className="form-control mb-3"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
       <select className="form-select mb-4" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="jewelry">Jewelry 💍</option>
            <option value="electronics">Electronics</option>
            <option value="perfume">Perfume</option>
            <option value="shoes">Shoes</option>
        </select>
        {/* Loading / Error / Products */}
        {loading ? (
          <h5 className="text-center">Loading Products...</h5>
        ) : error ? (
          <h5 className="text-center text-danger">{error}</h5>
        ) : filteredProducts.length === 0 ? (
          <h5 className="text-center">No products found</h5>
        ) : (
          <div className="row">
            {filteredProducts.map((p) => (
              <div className="col-md-3 mb-4" key={p.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={p.image || "https://via.placeholder.com/200"}
                    alt={p.title}
                    className="card-img-top p-3"
                    style={{ height: "200px", objectFit: "contain" }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200";
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <Link
                      to={`/product/${p.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h6 className="text-dark">{p.title}</h6>
                    </Link>
                    <p className="fw-bold text-success mt-auto">₹ {p.price}</p>

                    <button
                      className="btn btn-primary w-100 mb-2"
                      onClick={() => handleAddToCart(p)}
                    >
                      Add To Cart
                    </button>

                    <button
                      className="btn btn-outline-danger w-100"
                      onClick={() => handleAddToWishlist(p)}
                    >
                      ❤ Add To Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        &copy; {new Date().getFullYear()} Ecommerce Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;