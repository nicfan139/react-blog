import React from "react";

const bannerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "whitesmoke",
  backgroundColor: "blue",
  width: "100vw",
  height: 150
}

export class Banner extends React.Component {
  render() {
    const bannerTitle = this.props.title
    return (
      <div style={bannerStyle}>
        <h1>{bannerTitle}</h1>
      </div>
      )
  }
}
