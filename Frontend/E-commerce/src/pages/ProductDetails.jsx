import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

  }, [id]);

  const addToCart = async () => {

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {

      await axios.post("http://localhost:8080/api/cart", product);

      alert("Product added to cart");

    } catch (err) {
      console.error(err);
      alert("Failed to add to cart");
    }
  };

  const addToWishlist = async () => {

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {

      await axios.post("http://localhost:8080/api/wishlist", product);

      alert("Product added to wishlist");

    } catch (err) {
      console.error(err);
      alert("Failed to add to wishlist");
    }
  };

  if (loading) {
    return <h3 className="text-center mt-5">Loading product...</h3>;
  }

  if (!product) {
    return <h3 className="text-center mt-5">Product not found</h3>;
  }

  return (
    <div className="container mt-5">

      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row">

        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-6">

          <h2>{product.title}</h2>

          <h4 className="text-success mb-3">
            ₹{product.price}
          </h4>

          <p>{product.description}</p>

          <p>
            <b>Category:</b> {product.category}
          </p>

          <div className="mt-4">

            <button
              className="btn btn-primary me-3"
              onClick={addToCart}
            >
              Add to Cart
            </button>

            <button
              className="btn btn-outline-danger"
              onClick={addToWishlist}
            >
              Add to Wishlist
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;