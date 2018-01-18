import React from 'react';
import Likes from './Likes';

const Post = ({ onClick, title, likes }) => (
  <li onClick={onClick}>
    {title} - <Likes likes={likes} />
  </li>
);

export default Post;
