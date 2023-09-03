import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postApi } from 'api/services';

export interface PostSlice {
   posts: any | null;
   loading: boolean;
   error: any;
}

const INITIAL_STATE = {
   posts: null,
   loading: false,
   error: null,
} as PostSlice;

export const getAllPosts = createAsyncThunk('post/getAllPosts', postApi.getAllPosts);

const postSlice = createSlice({
   name: 'post',
   initialState: INITIAL_STATE,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllPosts.pending, (state) => {
            state.loading = true;
         })
         .addCase(getAllPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.posts = action.payload.data;
         })
         .addCase(getAllPosts.rejected, (state, action) => {
            state.loading = false;
            state.posts = null;
            state.error = action.payload;
         });
   },
});

export default postSlice.reducer;
