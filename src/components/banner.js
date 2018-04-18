import React from "react";


export class Banner extends React.Component {
  render() {
    const bannerTitle = this.props.title
    const bannerImage = this.props.background

    const bannerStyle = {
      banner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "whitesmoke",
        textShadow: "1px 1px rgba(100,100,100,0.5)",
        backgroundImage: `linear-gradient(rgba(100,100,100,0.5), rgba(100,100,100,0.5) 50%), url('${bannerImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: 300
      },
      title: {
        fontSize: 60
      }
    }
    return (

      <div style={bannerStyle.banner}>
        <h1 style={bannerStyle.title}>{bannerTitle}</h1>
      </div>
      )
  }
}
