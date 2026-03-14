import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/api/orders")
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));

  }, []);

  return (
    <div className="container mt-4">

      <h3 className="mb-4">Your Orders</h3>

      {orders.length === 0 ? (
        <p>No orders placed yet</p>
      ) : (

        <table className="table table-bordered">

          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>Total Amount (₹)</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (

              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.status || "Placed"}</td>
                <td>₹ {order.totalAmount}</td>
              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default Orders;