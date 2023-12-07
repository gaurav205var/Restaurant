import React from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import noOrderImage from "../img/noorderimg.webp";

const NoOrders = () => {
  const navigate = useNavigate();

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="container mt-5 text-center d-flex justify-content-center align-items-center">
        <div className="text-left">
          <div className="ml-5">
            <img
              src={noOrderImage}
              alt="emptycart"
              style={{ width: "300px", height: "auto" }}
            />
          </div>
          <h1>There is no Order Yet</h1>
          <p>
            No order found! Kindly check your checkout page or try to order
            something.
          </p>
          <div className="button_contain d-flex justify-content-center">
            <button
              onClick={homeHandler}
              type="button"
              className="btn btn-success m-3"
              style={{ width: "180px" }}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NoOrders;
