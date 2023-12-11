import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderData } from "../store/orderSlice";
import EmptyOrderPage from "./EmptyOrderPage";

const MyOrders = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => {
    return state.order;
  });
  console.log("orders in Myorder", order.orders);
  const navigate = useNavigate();
  const trackHandler = () => {
    navigate("/tracking");
  };

  useEffect(() => {
    dispatch(getOrderData());
  }, []);

  // Check if the orderpage is is empty
  const isOrderEmpty = order.orders.length === 0;

  return (
    <Layout>
      {isOrderEmpty ? (
        <EmptyOrderPage />
      ) : (
        <section>
          <div className="container mt-5 fw-bolder">
            <h3>All Orders</h3>
          </div>
          <div className="container">
            <div className="table-responsive">
              <table
                className="table"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                  marginBottom: "1.6rem",
                  marginTop: "1.4rem",
                }}
              >
                <thead>
                  <tr>
                    <th scope="col" style={{ fontWeight: "bolder" }}>
                      Order Id
                    </th>
                    <th scope="col" style={{ fontWeight: "bolder" }}>
                      Name
                    </th>
                    <th scope="col" style={{ fontWeight: "bolder" }}>
                      Status
                    </th>
                    <th scope="col" style={{ fontWeight: "bolder" }}>
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody className="table-group-divider table-divider-color">
                  {order.orders.map((item) => (
                    <tr key={item.id}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.status}</td>
                      <td>{item.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="button_contain d-flex justify-content-center">
              <button
                onClick={trackHandler}
                type="button"
                className="btn btn-success m-3 "
                style={{ width: "180px" }}
              >
                Track Order
              </button>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default MyOrders;
