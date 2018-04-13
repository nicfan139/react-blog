import React from "react";

const footerStyle = {
  width: "100%",
  marginTop: 30,
  padding: 10,
  fontWeight: "bold",
  color: "white",
  backgroundColor: "blue",
  textAlign: "center"
}

export class Footer extends React.Component {
  render() {
    return (
      <div style={footerStyle}>
        <p>&copy;&nbsp;Nicolas Fan</p>
      </div>
    )
  }
}
