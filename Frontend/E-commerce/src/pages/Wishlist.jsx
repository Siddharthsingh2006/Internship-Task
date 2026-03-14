import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Your Wishlist</h3>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image || "https://via.placeholder.com/200"}
                  alt={item.title}
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h6>{item.title}</h6>
                  <p className="fw-bold text-success mt-auto">₹ {item.price}</p>
                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => addToCart(item)}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;