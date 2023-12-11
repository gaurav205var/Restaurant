import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Logo from "../../img/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../store/cartSlice";
// import { useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { logout } from "../../store/authSlice";

const Header = () => {
  // const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    // navigate("/login");
  };

  const { cart, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink
            to={"/"}
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/myorders"}>MyOrders</NavLink>
        </li>
        {isAuthenticated ? (
          <li>
            <NavLink to={"/login"} onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        )}

        <li>
          <NavLink to={"/cart"}>
            <Button
              sx={{
                marginTop: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
              }}
              variant="contained"
            >
              <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Cart{" "}
              {totalQuantity}
            </Button>
          </NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink
                    to={"/"}
                    className={(navData) =>
                      navData.isActive ? "active-style" : "none"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/myorders"}>MyOrders</NavLink>
                </li>
                {isAuthenticated ? (
                  <li>
                    <NavLink to={"/login"} onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                )}
                <li>
                  <NavLink to={"/cart"}>
                    <Button
                      sx={{
                        marginTop: "10px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                      }}
                      variant="contained"
                    >
                      <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Cart{" "}
                      {totalQuantity}
                    </Button>
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
