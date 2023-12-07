import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//action
export const getOrderData = createAsyncThunk("getOrder", async () => {
  const response = await fetch("/api/orders");
  const result = response.json();
  console.log("orders",result);
  return result;
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
    [getOrderData.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


// Export the reducer
export default getOrder.reducer;
