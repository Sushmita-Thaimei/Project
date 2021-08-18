import React from "react";
import Headline from "./Headline";
import Navbar from "./inc/Navbar";
import Header from "../components/Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />

      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
