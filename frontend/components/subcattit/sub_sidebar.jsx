import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import { openModal, closeModal } from '../../actions/modal';
import { Redirect, Route } from 'react-router-dom';
import CreatePostFormContainer from '../posts/create_post_form_container';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { currentUser } from '../../reducers/selectors';
import { Translate } from 'react-redux-i18n';



//WORK IN PROGRESS

const SubSidebar = props => {
  Moment.locale('en');


  return (
      <div className="box">
       {
        (props.page === "subcattit") ?
            (<div className="box-banner">
              <h1 className='box-title'><Translate value="application.about_community"/></h1>
            </div>): 
            (<div className = "box-banner"></div>)
       }
     
    
      <div className="box-content">
        {
            (props.page === "submit" || props.page === "modal" ) ? 
            (<div className="sidebar-icon-container">
              <Link to={{
                pathname: `/mew/${props.subcattit.name}`
              }} className="sidebar-icon-container" >
                <img className="mini-header-pic" src={props.subcattit.iconUrl} />
                <span className='mini-sidebar-title'>mew/{props.subcattit.name}</span>
              </Link>
              </div>) :
                (null)
          }
  
        <div className="description">
          <span className="description">{props.subcattit.description}</span>
        </div>

        <div className="stats-container">
          <div className="subscriber-info">
              <span className="stats"> {props.subcattit.num_members} </span>
              <span className="subtitle">{props.subcattit.member_desc}</span>
          </div>
          <div className="subscriber-info">
              <span className="stats">{props.subcattit.num_online}</span>
              <span className="subtitle">{props.subcattit.online_desc}</span>
          </div>
          <div className="spacer"></div>
        </div>

        <div className="create-box">
            <span className="created-at"><i className="fas fa-birthday-cake"></i> 
            Created {Moment(props.subcattit.created_at).format('MMM DD, YYYY')} </span>
          {
            (props.page === "subcattit") ? (
                // <button className="create-btn">
                <div>
                  {
                    (props.currentUser !== undefined) ?
                      (<Link to={{ pathname: `/mew/${props.subcattit.name}/submit`, state: { subcattit_info: props.subcattit } }}><button className="create-btn">Create Post</button></Link>)
                      : (<a onClick={() => props.openModal('login')}><button className="create-btn">Create Post</button></a>)
                  }
                </div>
            ) : (null)
          }
        </div>
      </div>
    </div>
    )
}


const mapStateToProps = (state, ownProps) => {
  // const info = state.ui.postShow.name
  return {
    currentUser: currentUser(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeShow: () => dispatch(closeShow()),
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubSidebar);

