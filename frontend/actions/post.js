import * as PostApiUtil from '../util/post_util';
import { receiveErrors, clearErrors } from './session';

export const RECEIVE_POST = 'RECEIVE_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REMOVE_POST = 'REMOVE_POST'

const receivePost = (post, subcattit) => ({
  type: RECEIVE_POST,
  post,
  subcattit
});

const receivePosts = (posts, subcattit) => ({
  type: RECEIVE_POSTS,
  posts,
  subcattit
})

const deletePost = (postId) => ({
  type: REMOVE_POST,
  postId,
})

export const createNewPost = (post) => dispatch => {
  return PostApiUtil.createPost(post)
    .then((post) => dispatch(receivePost(post)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
}

export const fetchPosts = (postSubcattitId) => dispatch => {
  return PostApiUtil.getPosts(postSubcattitId)
    .then(posts => dispatch(receivePosts(posts)));
}

export const fetchPost = (post) => dispatch => {
  return PostApiUtil.getPost(post)
    .then((post) => dispatch(receivePost(post)))
}

export const removePost = (postId) => dispatch => {
  PostApiUtil.removePost(postId)
    .then(() => dispatch(deletePost(postId)))
}