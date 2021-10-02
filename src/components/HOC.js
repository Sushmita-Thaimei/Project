import React from "react";
import Navbar from "./inc/Navbar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
