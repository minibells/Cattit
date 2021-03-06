
export const createPost = (post) => (
  $.ajax({
    url: `/api/posts/`,
    method: 'POST',
    data: { post }
  })
)

export const getPosts = (postSubcattitId) => (
  $.ajax({
    url: `/api/subcattits/${postSubcattitId}/posts/`,
    method: 'GET'
  })
)

export const getAllPosts = () => (
  $.ajax({
    url: `/api/posts/all/`,
    method: 'GET'
  })
)

export const getPost = (postId) => (
  $.ajax({
    url: `/api/posts/${postId}/`,
    method: 'GET'
  })
)

  export const removePost = (postId) => (
  $.ajax({
    url: `/api/posts/${postId}/`,
    method: 'DELETE'
  })
)


export const createPostWithPhoto = (formData) => (
  $.ajax({
    url: `/api/posts`,
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
)
