import React from 'react';
import { allPosts } from '../seeds/allPosts';
import { ShareSnackbar } from '../components/snackbar'
import { Link } from 'react-router-dom';

const FontAwesome = require('react-fontawesome');

const styles = {
  postPageContainer: {
    width: "80%",
    margin: "0px auto"
  },
  link: {
    color: "blue",
    textDecoration: "none"
  }
}

export const PostPage = ({ match }) => {
  // Use the ID from URL to find the Object containing the Post's content
  const findPostContent = allPosts.filter((post) => post.postId == match.params.postId);
  const postContent = findPostContent[0];

  return (
    <div style={styles.postPageContainer}>
      <h1>{ postContent.title }</h1>
      <p>{ postContent.desc }</p>
      <ShareSnackbar />
      <Link to='/' style={styles.link}>
        <FontAwesome name='undo-alt' />
        &nbsp;&nbsp;
        <strong>Back to all posts</strong>
      </Link>
    </div>
  )
}
