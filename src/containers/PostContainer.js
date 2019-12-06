import React from "react";
import PostPreview from "../components/PostPreview";
import { Link } from 'react-router-dom';
import { allPosts } from '../seeds/allPosts';

const styles = {
  post: {
    color: "black",
    textDecoration: "none"
  }
}

const PostContainer = props => {
  return (
    <div>
      { allPosts.map(post =>
        <Link
          to={`/posts/${post.postId}`}
          style={styles.post}
        >
          <PostPreview title={post.title} desc={post.desc} />
        </Link>
      )}
    </div>
  )
}

export default PostContainer;