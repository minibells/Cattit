import React from 'react'
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';

// TODO: Use a better f*cking text editor 

const TextPostForm = props => {


  return (
  

      <div className="post-body-container">

        <ReactQuill
          className="quill-styling"
          defaultValue={props.body}
          onChange={props.handleChange} >
          <div className="create-post-body"
            contentEditable="true" />

        </ReactQuill>

      </div>

    
  )
}

export default TextPostForm;