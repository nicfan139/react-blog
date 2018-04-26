import React from "react";

const styles = {
  post: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    padding: "5px 15px",
    margin: "20px auto",
    borderRadius: 5,
    backgroundColor: "whitesmoke",
    boxShadow: "1px 2px 3px 1px rgba(50,50,50,0.3)"
  },
  desc: {
    margin: "0px 80px 0px 60px"
  }
}

const Post = (props) => {
  const postTitle = props.title
  const postDesc = props.desc
  return (
    <div style={styles.post}>
      <h2>{postTitle}</h2>
      <p style={styles.desc}>{postDesc}</p>
    </div>
  )
}

export default Post;
