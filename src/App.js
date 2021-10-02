import "./App.css";
import Book from "./components/pages/Booking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import Headline from "./components/Headline";
import Layout from "./components/HOC";
import SignUp from "./components/pages/Signup";
import Bottom from "./components/pages/footer";

function App() {
  return (
    <Switch>
      <Route
        path="/booking"
        exact
        component={() => (
          <>
            <Book />
            <Bottom />
          </>
        )}
      />
      <Route
        path="/home"
        exact
        component={() => (
          <React.Fragment>
            <Layout>
              <Header />
              <Headline />
              <Body />
              <Footer />
            </Layout>
          </React.Fragment>
        )}
      />

      <Route
        path="/signup"
        exact
        component={() => (
          <React.Fragment>
            <Layout>
              <SignUp />
            </Layout>
          </React.Fragment>
        )}
      />

      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
    </Switch>
  );
}

export default App;
