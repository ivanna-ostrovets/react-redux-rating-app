import React from 'react';

const Post = ({ onClick, title, likes }) => (
  <li onClick={onClick}>
    {title} - <Likes likes={likes}/>
  </li>
);

export default Post;
