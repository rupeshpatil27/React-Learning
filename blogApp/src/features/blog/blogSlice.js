import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  try {
    const response = await axios.get("https://dummyjson.com/posts");

    return await response.data;
  } catch (error) {
    console.log(error)
    throw thunkApi.rejectWithValue(error.response.data.message);
  }
});

const initialState = {
  blogs: [],
  error: null,
  isLoading: false,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;    
      state.isLoading = false;
    });
    builder.addCase(fetchBlogs.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { } = blogSlice.actions;

export default blogSlice.reducer;
