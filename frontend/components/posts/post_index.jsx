import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      body: '',
      author_id: '',
      subcattit_id: ''
    }
    this.removeHandler = this.removeHandler.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount(){
    this.props.fetchPosts(this.props.subcattit);
    // console.log("mounted!")
  }

  componentDidUpdate(preProps){
    if (preProps.subcattit !==  this.props.subcattit) {
      this.props.fetchPosts(this.props.subcattit);
    } else if (preProps.posts.length !== Object.values(this.props.posts).length) {
      this.props.fetchPosts(this.props.subcattit)
    }
  }

  removeHandler(e){
    e.preventDefault();
    e.stopPropagation();
    let postId = e.currentTarget.id
    this.props.removePost(postId)
  }
          // <Link to={`/mew/${this.props.subcattit}/comments/${post.id}`} onClick={() => this.props.openShow('show')}>

 openModal(e, post){
   e.preventDefault();
   e.stopPropagation();
  //  console.log(e.currentTarget);
   this.props.openShow(post)
 }

  render(){
    const { posts } = this.props;
    return(
      <div className="post-container">
        {
        posts ? ( Object.values(posts).map((post, i) => 
          <div onClick={(e) => this.openModal(e, post)} key={i}>
            <PostIndexItem 
              post={post} 
              key={i} 
              subcattit={this.props.subcattit} 
              removeHandler={this.removeHandler.bind(this)} 
              currentUser={this.props.currentUser} 
              openModal={this.openModal.bind(this)}/>
              </div>
          )
        ) : (
          <div className="post-container">
            <div className="post">
            <h2 className="title">No posts yet!</h2>
            </div>
            </div>)
        }
      </div>
    )
  }
}
// { post: post, subcattit: this.props.subcattitInfo }

export default PostIndex;