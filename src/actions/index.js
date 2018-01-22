import fetch from 'isomorphic-fetch'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LIKE_POST = 'LIKE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const likePost = post => ({
  type: LIKE_POST,
  post,
});

export const fetchPosts = () => (
  dispatch => {
    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => handleErrors(response))
      .then(response => response.json())
      .then(posts => posts.map(post => {
        post.likes = 0;

        return post;
      }))
      .then(posts => dispatch(receivePosts(posts)))
      .catch(error => alert(error))
  }
);

export const fetchPost = post => (
  dispatch => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => handleErrors(response))
      .then(response => response.json())
      .then(() => dispatch(likePost(post)))
      .catch(error => alert(error))
  }
);

const handleErrors = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};
