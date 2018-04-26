import React from "react";
import { PageContent } from './PageContent';
import { NavBar } from '../components/navbar';

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
      <NavBar />
      <PageContent />
    </div>
  )
}
