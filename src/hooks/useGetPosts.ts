import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'store';
import { getAllPosts } from 'store/slices/postSlice';

const useGetPosts = () => {
   const dispatch = useDispatch<AppDispatch>();
   const post = useSelector((state: RootState) => state.post);

   const { posts, loading, error } = post;

   const getPosts = useCallback(async () => {
      const response = await dispatch(getAllPosts());
      return response.payload;
   }, [dispatch]);

   return { getPosts, posts, loading, error };
};

export default useGetPosts;
