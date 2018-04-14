import React from "react";


export class Banner extends React.Component {
  render() {
    const bannerTitle = this.props.title
    const bannerBackground = this.props.background

    const bannerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "whitesmoke",
      backgroundColor: bannerBackground,
      width: "100vw",
      height: 150
    }
    return (

      <div style={bannerStyle}>
        <h1>{bannerTitle}</h1>
      </div>
      )
  }
}
