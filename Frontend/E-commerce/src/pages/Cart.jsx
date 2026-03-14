import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {

  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mt-4">

      <h3 className="mb-4">Your Cart</h3>

      {cart.length === 0 ? (

        <div className="text-center">
          <h5>Your cart is empty</h5>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>

      ) : (

        <>
          <table className="table table-bordered align-middle">

            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {cart.map((item) => (

                <tr key={item.id}>

                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      width="60"
                    />
                  </td>

                  <td>{item.title}</td>

                  <td>₹ {item.price}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <h5 className="mt-3">Total: ₹ {total}</h5>

          <div className="mt-3">

            <button
              className="btn btn-warning me-3"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <button
              className="btn btn-success"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>

          </div>

        </>

      )}

    </div>
  );
}

export default Cart;