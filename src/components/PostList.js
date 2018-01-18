import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts;
    const onPostClick = this.props.onPostClick;

    return (
      <ul>
        {posts.map(post =>
          <Post key={post.id} {...post} onClick={() => onPostClick(post)} />
        )}
      </ul>
    );
  }
}

export default PostList;
