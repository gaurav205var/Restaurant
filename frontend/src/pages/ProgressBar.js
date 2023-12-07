import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "../styles/AnimatedProgressBar.css";
import Layout from "../components/Layout/Layout";

const AnimatedProgressBar = () => {
  return (
    <Layout>
      <MDBContainer className="main">
        <MDBRow>
          <MDBCol>
            <div className="head">
              <p className="head_1">Track Food Delivery Status</p>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow
          className="mb-4"
          style={{ padding: "1.2rem", textAlign: "center" }}
        >
          <MDBCol md="2">
            {/* Check icon for order placed */}
            <MDBIcon icon="shopping-cart" size="3x" className="text-primary" />
            <div className="progress one">
              <p>1</p>
              {/* <div className="line-horizontal"></div> */}
              <div className="line"></div>
              <MDBIcon icon="check" size="lg" className="text-white" />
            </div>
            <p className="text">Order Placed</p>
          </MDBCol>

          <MDBCol md="2">
            {/* Double tick mark for order confirmation */}
            <MDBIcon icon="check-double" size="3x" className="text-primary" />
            <div className="progress two">
              <p>2</p>
              <div id="line-horizontal1"></div>
              <div className="line"></div>
              <MDBIcon icon="check" size="lg" className="text-white" />
            </div>
            <p className="text">Order Confirmation</p>
          </MDBCol>

          <MDBCol md="2">
            {/* Pizza slice icon for preparation stage */}
            <MDBIcon icon="pizza-slice" size="3x" className="text-primary" />
            <div className="progress three">
              <p>3</p>
              <div id="line-horizontal2"></div>
              <div className="line"></div>
              <MDBIcon icon="check" size="lg" className="text-white" />
            </div>
            <p className="text">Preparation</p>
          </MDBCol>

          <MDBCol md="2">
            {/* Delivery truck icon for out for delivery */}
            <MDBIcon icon="truck" size="3x" className="text-primary" />
            <div className="progress four">
              <p>4</p>
              <div id="line-horizontal3"></div>
              <div className="line"></div>
              <MDBIcon icon="check" size="lg" className="text-white" />
            </div>
            <p className="text">Out for Delivery</p>
          </MDBCol>

          <MDBCol md="2">
            {/* Smiley face icon for completed stage */}
            <MDBIcon icon="smile-beam" size="3x" className="text-primary" />
            <div className="progress five">
              <p>5</p>
              <div id="line-horizontal4"></div>
              <div className="line"></div>
              <MDBIcon icon="check" size="lg" className="text-white" />
            </div>
            <p className="text">Order Completed</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Layout>
  );
};

export default AnimatedProgressBar;
