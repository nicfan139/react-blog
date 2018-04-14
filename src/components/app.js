import React from "react";
import { Main } from './main';
import { ButtonAppBar } from './appbar';
import { Banner } from './banner';
import { Footer } from './footer';

const appStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
}

export class App extends React.Component {
  render() {
    return (
      <div style={appStyle}>
        <ButtonAppBar />
        <Main />
      </div>
    )
  }
}
