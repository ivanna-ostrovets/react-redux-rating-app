import { combineReducers } from 'redux';
import { RECEIVE_POSTS, LIKE_POST } from '../actions/actions';

const posts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    case LIKE_POST:
      const posts = state.posts.slice().map(post => {
        if (post.id === action.post.id) {
          return {
            ...post,
            likes: post.likes + 1,
          };
        }

        return post;
      });

      return { ...state, posts, };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
