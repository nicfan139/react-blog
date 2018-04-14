import React from 'react';

const styles = {
  whiteBox: {
    width: 600,
    height: 400,
    backgroundColor: "white",
    boxShadow: "0px 2px 3px 2px rgba(50,50,50,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  profileAvatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    border: "4px solid grey"
  },
}

export class Profile extends React.Component {
  render() {
    return (
      <div style={styles.whiteBox}>
        <img style={styles.profileAvatar} src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt="Profile Pic"></img>
        <h2>User</h2>
        <p><em>Description about this user</em></p>
      </div>
    )
  }
}
