import React from "react";
import { Main } from './main';
import { ButtonAppBar } from '../components/appbar';
import { Banner } from '../components/banner';
import { Footer } from '../components/footer';

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
