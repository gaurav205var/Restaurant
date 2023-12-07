import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSignUp = createAsyncThunk(
  "userSignUp",
  async (inputValues) => {
    console.log("userSignUp", inputValues);
    return fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
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
  }
);

//action
export const userLoginData = createAsyncThunk(
  "userLoginData",
  async (loginData) => {
    console.log("userloginpost", loginData);
    return await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json(loginData))
      .then((data) => {
        // Handle the data from the server
        console.log("Success:", data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }
);


// Create a slice
export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: "",
    token: "",
    loading: false,
    error: null,
    isSuccess: "",
  },
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    //signup
    [userSignUp.pending]: (state, action) => {
      state.loading = true;
    },
    [userSignUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [userSignUp.pending]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //login
    [userLoginData.pending]: (state, action) => {
      state.loading = true;
    },
    [userLoginData.fulfilled]: (state, { payload: accessToken }) => {
      console.log("token in local", typeof(accessToken));
      state.loading = false;
      state.token = accessToken;
      // state.user = user;ons

      localStorage.setItem("token", accessToken);
      // localStorage.setItem("user", JSON.stringify(user));
    },
  },
  [userLoginData.pending]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
