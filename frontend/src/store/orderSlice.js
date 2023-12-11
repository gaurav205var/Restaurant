import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const authToken = localStorage.getItem("token");
const tokenObject = JSON.parse(authToken);
const accessToken = tokenObject?.accessToken;

//action
export const getOrderData = createAsyncThunk("getOrder", async () => {
  console.log("token in myorder", accessToken);
  try {
    const response = await fetch("/api/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("orders", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
});

// Create a slice
export const getOrder = createSlice({
  name: "getOrder",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getOrderData.pending]: (state, action) => {
      state.loading = true;
    },
    [getOrderData.fulfilled]: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    [getOrderData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export the reducer
export default getOrder.reducer;
