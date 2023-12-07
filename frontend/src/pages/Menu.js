import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../store/getMenuSlice";
import Layout from "./../components/Layout/Layout";
import { useEffect } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { addToCart } from "../store/cartSlice";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const Menu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    // console.log("state...", state.app);
    return state.app;
  });
  
  // console.log("user in menu.js",user);
  // const item = user.users;
  // console.log("data....", item);


  useEffect(() => {
    dispatch(getAllData());
  }, []);

  // const [users, setUsers] = useState([]);

  // const apiGet = () => {
  //   fetch("/api/menu")
  //     .then((response) => response.json())
  //     .then((data) => {

  //       const Menu = data;
  //       console.log(Menu);
  //       setUsers(data)
  //     });
  // };

  // useEffect(() => {
  //   apiGet();
  // }, []);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {user.users.map((menu) => (
          <Card key={menu.id} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="h6">
                  {" "}
                  <CurrencyRupeeIcon /> {menu.price}
                </Typography>
                <Button
                  onClick={() => dispatch(addToCart(menu))}
                  sx={{ marginTop: "10px" }}
                  variant="contained"
                  color="success"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};


export default Menu;
