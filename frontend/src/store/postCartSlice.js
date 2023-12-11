import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const authToken = localStorage.getItem("token");
const tokenObject = JSON.parse(authToken);
const accessToken = tokenObject?.accessToken;


//action
export const postCartData = createAsyncThunk("postCartData", async (cart) => {
  console.log("token in postcart",accessToken);
  console.log("chechout", cart);
  return fetch("/api/menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(cart),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the data from the server
      console.log("Success:", data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
    });
});

// Create a slice
export const postCart = createSlice({
  name: "postCart",
  initialState: {
    data: [],
    loading: false,
    error: null,
    isSuccess: "",
  },
  extraReducers: {
    [postCartData.pending]: (state, action) => {
      state.loading = true;
    },
    [postCartData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [postCartData.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postCart.reducer;
