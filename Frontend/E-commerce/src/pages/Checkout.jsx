import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Checkout() {

  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const placeOrder = async () => {

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {

      const orderData = {
        userId: user?.id,
        totalAmount: total,
        status: "Placed"
      };

      await axios.post("http://localhost:8080/api/orders", orderData);

      alert("Order placed successfully!");

      clearCart();

      navigate("/orders");

    } catch (error) {

      console.error(error);
      alert("Failed to place order");

    }

  };

  return (
    <div className="container mt-4">

      <h3 className="mb-4">Checkout</h3>

      {cart.length === 0 ? (

        <p>Your cart is empty</p>

      ) : (

        <>
          <table className="table table-bordered">

            <thead className="table-dark">
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
              </tr>
            </thead>

            <tbody>

              {cart.map((item) => (

                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>₹ {item.price}</td>
                </tr>

              ))}

            </tbody>

          </table>

          <h5>Total Amount: ₹ {total}</h5>

          <button
            className="btn btn-success mt-3"
            onClick={placeOrder}
          >
            Place Order
          </button>

        </>

      )}

    </div>
  );
}

export default Checkout;