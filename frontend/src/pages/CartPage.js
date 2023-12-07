import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { postCartData } from "../store/postCartSlice";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Typography } from "@mui/material";
import {
  getCartTotal,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";
import CheckOutModal from "./CheckOutModal";
import EmptyCartPage from "./EmptyCartPage";

function CartPage() {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  // Check if the cart is empty
  const isCartEmpty = cart.length === 0;

  return (
    <Layout showEmptyCartModal={isCartEmpty}>
      {isCartEmpty ? (
        // Render EmptyCartPage if cart is empty
        <EmptyCartPage />
      ) : (
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                  </div>
                  <div className="card-body">
                    {/* Single item */}
                    {cart.map((data) => (
                      <div key={data.id} className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/* Image */}
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={data.image}
                              className="w-100"
                              alt="Blue Jeans Jacket"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              />
                            </a>
                          </div>
                          {/* Image */}
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          {/* Data */}
                          <Typography
                            variant="h5"
                            gutterBottom
                            component={"div"}
                          >
                            {data.name}
                          </Typography>
                          <p>{data.description}</p>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                            onClick={() => dispatch(removeItem(data))}
                          >
                            <i className="fas fa-trash" />
                          </button>

                          {/* Data */}
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* Quantity */}
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: 300 }}
                          >
                            <button
                              className="btn btn-primary px-3 me-2"
                              onClick={() => dispatch(decreaseQuantity(data))}
                            >
                              <i className="fas fa-minus" />
                            </button>
                            <div className="form-outline">
                              <input
                                id="form1"
                                min={0}
                                name="quantity"
                                defaultValue={data.quantity}
                                type="number"
                                className="form-control"
                                onChange={() => null}
                              />
                              <label className="form-label" htmlFor="form1">
                                Quantity
                              </label>
                            </div>
                            <button
                              className="btn btn-primary px-3 ms-2"
                              onClick={() => dispatch(increaseQuantity(data))}
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          {/* Quantity */}
                          {/* Price */}
                          <p className="text-start text-md-center">
                            <Typography variant="h6">
                              <CurrencyRupeeIcon /> {data.price}
                            </Typography>
                          </p>
                        </div>
                      </div>
                    ))}
                    <hr className="my-4" />
                    {/* Single item */}

                    {/* Single item */}
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body">
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                      alt="PayPal acceptance mark"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Total Quantity
                        <span>{totalQuantity}</span>
                      </li>

                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <Typography variant="h6">
                            <CurrencyRupeeIcon /> {totalPrice}
                          </Typography>
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={() => dispatch(postCartData(cart))}
                      type="button"
                      className="btn btn-success btn-lg btn-block"
                    >
                      <CheckOutModal />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

export default CartPage;
