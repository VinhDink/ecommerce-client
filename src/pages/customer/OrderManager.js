import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import axios from "../../config/index";

const CustomerOrderManager = () => {
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);
  const [orders, setOrders] = useState([]);

    const getUser = async () => {
        try {
            const response = await axios.get("me");
            console.log(response.data);
            setLoading(false);
            return response.data.userId;
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
        };

  useEffect(() => {
    const getOrders = async () => {
        try {
            const userId = await getUser();
            const response = await axios.post("/customer/orders", {
                userId: userId,
            });
            setOrders(response.data);
            setLoad(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoad(false);
        }
    };
    
    getOrders();
    }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await axios.put(`/customer/orders`, {
        orderId: orderId,
        status: newStatus,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="page__box">
        <div className="page__content">
          <div className="page__title">
            <h1>Customer Order Manager</h1>
          </div>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Item name</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>
                    <td>
                      <ul>
                        {order.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {item.product}, amount: {item.quantity}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>{order.address}</td>
                    <td>
                      {order.statusUpdate.customerDecision
                        ? order.statusUpdate.customerDecision
                        : order.statusUpdate.productStatus}
                    </td>
                    <td>
                      {order.statusUpdate.productStatus === "Shipped" &&
                      !order.statusUpdate.customerDecision ? (
                        <>
                          <Button
                            variant="success"
                            onClick={() =>
                              updateOrderStatus(order._id, "Accepted")
                            }
                          >
                            Accept
                          </Button>
                          <Button
                            variant="danger"
                            className="ms-1"
                            onClick={() =>
                              updateOrderStatus(order._id, "Rejected")
                            }
                          >
                            Reject
                          </Button>
                        </>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CustomerOrderManager;
