import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//action
export const getAllData = createAsyncThunk("getMenu", async () => {
  const response = await fetch("/api/menu");
  const result = response.json();
  // console.log(result);
  return result;
});

// Create a slice
export const getMenu = createSlice({
  name: "getMenu",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAllData.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllData.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


// Export the reducer
export default getMenu.reducer;
