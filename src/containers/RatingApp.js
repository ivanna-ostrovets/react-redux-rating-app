import { connect } from 'react-redux';
import { fetchPost, fetchPosts, likePost, receivePosts } from '../actions/actions';
import PostList from '../components/PostList';

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
  onPostClick(post) {
    fetchPost(post).then(json => dispatch(likePost(json)));
  },

  fetchPosts() {
    fetchPosts().then(json => dispatch(receivePosts(json)))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
