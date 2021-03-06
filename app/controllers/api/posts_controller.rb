class Api::PostsController < ApplicationController

  def all
    @allposts = Post.all.order(created_at: :desc)
    render :all
  end


  def index 
    # debugger
    @posts = Subcattit.find_by(name: params[:subcattit_id]).posts.order(created_at: :desc)
    render :index
  end

  def show 
    @post = Post.find_by(subcattit_id: params[:subcattit_id])
    render :show
  end

  def create 
    @post = Post.new(post_params)
    # @post.updoots = Updoot.create(user_id: current_user.id)
    @post.updoots.new(user_id: current_user.id)
    if @post.save 
      render :create
    else
      # render json: ['Title cannot be empty.'], status: 418
     render :json => @post.errors.full_messages, status: 418 
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    # render :index
  end

  private 
  def post_params 
    params.require(:post).permit(:author_id, :title, :body, :subcattit_name, :subcattit_id, :created_at, :photo, :linkUrl, :id, :updoots, :downdoots)
  end
end
