import React from 'react';
import Post from './Post';

const PostList = ({ posts, onPostClick }) => (
  <ul>
    {posts.map(post =>
      <Post key={post.id} {...post} onClick={() => onPostClick(post)} />
    )}
  </ul>
);

export default PostList;
