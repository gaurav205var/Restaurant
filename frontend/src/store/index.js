// store.js
import { configureStore } from "@reduxjs/toolkit";
import getMenu from "./getMenuSlice";
import cartReducer from "./cartSlice";
import postCart from "./postCartSlice";
import authSlice from "./authSlice";
import getOrder from "./orderSlice"

const store = configureStore({
  reducer: {
    app: getMenu,
    cart: cartReducer,
    post: postCart,
    user: authSlice,
    order: getOrder,
  },
});

export default store;
