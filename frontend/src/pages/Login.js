import React, { useState } from "react";
import foodPic from "../img/foodPic.jpg";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Layout from "../components/Layout/Layout";
import { useDispatch } from "react-redux";
import { userSignUp, userLoginData } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const loginData = {
    email,
    password,
  };

  const inputValues = {
    username,
    email,
    password,
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    //isRegistering false
    if (!isRegistering) {
      dispatch(userLoginData(loginData));
      console.log("logindata", loginData);
      if (email || password) {
        navigate("/");
      }
    } else {
      console.log("inputdata", inputValues);
      dispatch(userSignUp(inputValues));
      setIsRegistering(true);
      if (username || email || password) {
        navigate("/");
      }
    }
  };
  return (
    <Layout>
      <MDBContainer className="my-5">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src={foodPic}
                alt="login form"
                className="rounded-start w-100 h-100"
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <img
                    src="http://localhost:3000/static/media/logo.6fc22e5fbdec6b9338921613bddec0dd.svg"
                    alt="Logo"
                    className="me-3"
                    style={{
                      width: "13rem",
                      height: "6rem",
                      backgroundColor: "white",
                    }}
                  />
                </div>
                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  {isRegistering
                    ? "Register an account"
                    : "Sign into your account"}
                </h5>
                {isRegistering && (
                  <MDBInput
                    wrapperClass="mb-4"
                    label="User Name"
                    id="formControlLg"
                    type="name"
                    size="lg"
                    onChange={(event) => setUserName(event.target.value)}
                  />
                )}
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <MDBBtn
                  className="mb-4 px-5"
                  color="dark"
                  size="lg"
                  onClick={handleSubmit}
                >
                  {isRegistering ? "Register" : "Login"}
                </MDBBtn>
                {isRegistering ? (
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Already have an account?{" "}
                    <a
                      href="#!"
                      onClick={() => setIsRegistering(false)}
                      style={{ color: "#393f81" }}
                    >
                      Sign in here
                    </a>
                  </p>
                ) : (
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a
                      href="#!"
                      onClick={() => setIsRegistering(true)}
                      style={{ color: "#393f81" }}
                    >
                      Register here
                    </a>
                  </p>
                )}
                <div className="d-flex flex-row justify-content-start">
                  <a href="#!" className="small text-muted me-1">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </Layout>
  );
};

export default AuthPage;
