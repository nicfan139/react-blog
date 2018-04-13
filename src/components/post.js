import React from "react";

const postStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "70%",
  padding: "5px 15px",
  margin: "20px auto",
  borderRadius: 5,
  backgroundColor: "whitesmoke",
  boxShadow: "1px 2px 3px 1px rgba(50,50,50,0.3)"
}

const descStyle = {
  margin: "0px 80px 0px 60px"
}

class Post extends React.Component {
  render() {
    const postTitle = this.props.title
    const postDesc = this.props.desc
    return (
      <div style={postStyle}>
        <h2>{postTitle}</h2>
        <p style={descStyle}>{postDesc}</p>
        <a href="#"><i className="fas fa-share-square"></i></a>
      </div>
    );
  }
}

export default Post;
