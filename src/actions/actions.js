import fetch from 'isomorphic-fetch'

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const LIKE_POST = 'LIKE_POST';

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  };
}

export function likePost(post) {
  return {
    type: LIKE_POST,
    post,
  };
}

export function fetchPosts(dispatch) {
  return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => handleErrors(response))
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
    .catch(error => alert(error));
}

export function fetchPost(dispatch, post) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => handleErrors(response))
    .then(response => {
      dispatch(likePost(post));

      return response.json();
    })
    .catch(error => alert(error));
}

function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}
