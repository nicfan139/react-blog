import React from "react";
import { Main } from './main';
import { ButtonAppBar } from '../components/appbar';

const appStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
}

export const App = () => {
  return (
    <div style={appStyle}>
      <ButtonAppBar />
      <Main />
    </div>
  )
}
