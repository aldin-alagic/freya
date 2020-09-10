import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/home";
import Spinner from "./components/spinner";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import HelpAndSupport from "./components/helpAndSupport";
import FAQ from "./components/faq";
import SubmitTicket from "./components/submitTicket";
import ContactUs from "./components/contactUs";

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="main-container">
        <Spinner />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          bodyClassName="p-3 text-justify"
        />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/help-and-support" component={HelpAndSupport} />
            <Route path="/faq" component={FAQ} />
            <Route path="/submit-ticket" component={SubmitTicket} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
