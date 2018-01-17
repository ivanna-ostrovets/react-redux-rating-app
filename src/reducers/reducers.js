import { combineReducers } from 'redux';

import { RECEIVE_POSTS, LIKE_POST } from '../actions/actions';

function posts(state = { posts: [] }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts,
      };

    case LIKE_POST:
      const posts = state.posts.slice().map(post => {
        if (post.id === action.post.id) {
          return Object.assign({}, post, { likes: post.likes ? post.likes + 1 : 1 });
        }

        return post;
      });

      return { ...state, posts, };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
