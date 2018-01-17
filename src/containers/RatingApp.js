import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPost, fetchPosts } from '../actions/actions';
import PostList from '../components/PostList';

class RatingApp extends Component {
  constructor(props) {
    super(props);

    this.onPostClick = this.onPostClick.bind(this);
  }

  componentDidMount() {
    fetchPosts(this.props.dispatch);
  }

  onPostClick(event, post) {
    fetchPost(this.props.dispatch, post);
  }

  render() {
    const posts = this.props.posts;

    return (
      posts.length > 0 &&
      <PostList posts={posts} onPostClick={this.onPostClick} />
    );
  }
}

function mapStateToProps(state) {
  const posts = state.posts.posts;

  return {
    posts,
  };
}

export default connect(mapStateToProps)(RatingApp);
