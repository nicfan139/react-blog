import React from "react";
import Post from "../components/post";
import { Link } from 'react-router-dom';
import { allPosts } from '../seeds/allPosts';

const styles = {
  post: {
    color: "black",
    textDecoration: "none"
  }
}

export const PostContainer = (props) => {
  return (
    <div>
      { allPosts.map((post) =>
        <Link
          to={`/posts/${post.postId}`}
          style={styles.post}
          >
          <Post title={post.title} desc={post.desc} />
        </Link>
      )}
    </div>
  )
}
