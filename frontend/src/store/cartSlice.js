import { createSlice } from "@reduxjs/toolkit";

//initial State
const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  isSuccess: "",
};

//Create Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      console.log("first", find, action.payload);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("cartTotal", cartTotal);
          console.log("cartItem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    // goToCheck: (state) => {},
    removeItem: (state, action) => {
      // state.cart.pop(action.payload);
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload._id) {
          // Ensure quantity is greater than 1 before decrementing
          const newQuantity = Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  goToCheck,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
