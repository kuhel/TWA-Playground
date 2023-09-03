export interface Post {
   title: string;
   content: string;
   author: string;
}

export interface CreatePostResponse {
   post: Post;
}

export interface GetAllPostsResponse {
   posts: Post[];
}

export interface PostService {
   createPost: (data: Post) => HttpPromise<CreatePostResponse>;
   getAllPosts: () => HttpPromise<GetAllPostsResponse>;
}
