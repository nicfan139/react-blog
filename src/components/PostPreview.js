import React from "react";
import './styles/PostPreview.css';

const PostPreview = props => {
  const postTitle = props.title;
  const postDesc = props.desc;
  return (
    <div
    	title="Click to read more..."
    	className="postPreview"
    >
      <h2>{postTitle}</h2>
      <p className="postPreview-desc">{postDesc}</p>
    </div>
  )
}

export default PostPreview;