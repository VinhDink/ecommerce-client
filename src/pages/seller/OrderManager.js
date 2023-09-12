import "../../style/orderManager.css";
import axios from "../../config/index";
import { useState, useEffect } from "react";

const OrderManager = () => {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get("/me");
      return response.data.userId;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getOrder = async () => {
      try {
        const userId = await getUser();
        const response = await axios.post("/seller/order", {
          userId: userId,
        });
        console.log(response.data);
        setOrder(response.data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getOrder();
  }, []);

  const setStatus = async (orderId, status) => {
    try {
      const response = await axios.put("/seller/order", {
        orderId: orderId,
        status: status,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="page__box">
      <div class="page__content">
        <div class="page__title">
          <h1>Order manager</h1>
        </div>
        <div>
          <table class="table__box">
            <tr>
              <th>Index</th>
              <th>Item name</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {order.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <ul>
                    {item.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.product.name}, amount:{item.quantity}{" "}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{item.address}</td>
                <td>
                  {item.statusUpdate.customerDecision
                    ? item.statusUpdate.customerDecision
                    : item.statusUpdate.productStatus}
                </td>
                <td>
                  <button
                    class="btn btn-success"
                    onClick={() => setStatus(item._id, "Shipped")}
                  >
                    Shipped
                  </button>
                  <button
                    class="btn btn-danger ms-1"
                    onClick={() => setStatus(item._id, "Cancel")}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManager;
