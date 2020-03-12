json.extract! @post, :title, :body, :author_id, :id, :created_at, :updated_at, :num_comments, :upvotes, :subcattit_id, :photo, :post_type
json.name @post.subcattit.name
json.username @post.user.username
if @post.photo.attached?
    json.photoUrl url_for(@post.photo)
else
    json.photoUrl ""
end