import { connect } from 'react-redux';
import { fetchPost, fetchPosts } from '../actions/index';
import PostList from '../components/PostList';

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
  onPostClick(post) {
    dispatch(fetchPost(post));
  },

  fetchPosts() {
    dispatch(fetchPosts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
