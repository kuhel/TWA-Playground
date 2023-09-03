import {
   PostService as IPostService,
   Post,
   CreatePostResponse,
   GetAllPostsResponse,
} from 'api/posts/posts.model';

import httpClient from 'common/http/httpClient';

const PostService = (): IPostService => {
   return {
      createPost: (data: Post): HttpPromise<CreatePostResponse> => {
         return httpClient.post('/posts', { data });
      },
      getAllPosts: (): HttpPromise<GetAllPostsResponse> => {
         return httpClient.get('/posts');
      },
   };
};

export default PostService();
