import React from "react";
import Content from './Content';
import Navbar from '../components/Navbar';

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
}

export const Layout = () => {
  return (
    <div style={layoutStyle}>
      <Navbar />
      <Content />
    </div>
  )
}
