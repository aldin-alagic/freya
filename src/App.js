import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReactTooltip from "react-tooltip";

import { Spinner } from "./components/Spinner";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HelpAndSupport } from "./components/HelpAndSupport";
import { Faq } from "./components/Faq";
import { SubmitTicket } from "./components/SubmitTicket";
import { ContactUs } from "./components/ContactUs";
import { UserAgreement } from "./components/UserAgreement";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { AboutUs } from "./components/AboutUs";
import { Pricing } from "./components/pricing/Pricing";
import { BecomeExpert } from "./components/becomeExpert/BecomeExpert";
import { HowItWorks } from "./components/howItWorks/HowItWorks";
import { Solutions } from "./components/solutions/Solutions";
import { Solution } from "./components/solutions/solution/Solution";
import { Report } from "./components/Report";
import { Profile } from "./components/profile/Profile";
import { Issues } from "./components/issues/Issues";
import { Issue } from "./components/issues/issue/Issue";
import { NewIssue } from "./components/issues/newIssue/NewIssue";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { ProtectedRoute } from "./components/common/ProtectedRoute";
import { Home } from "./components/home/Home";
import auth from "./services/userService";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/styles/rsuite-default.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="main-container">
        <ReactTooltip place="right" type="dark" effect="solid" />
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
        <Report />
        <NavBar user={user} />
        <main className="container col-9">
          <Switch>
            <Route path="/help-and-support" component={HelpAndSupport} />
            <Route path="/faq" component={Faq} />
            <ProtectedRoute path="/submit-ticket" component={SubmitTicket} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/user-agreement" component={UserAgreement} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/become-an-expert" component={BecomeExpert} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/solution/test" component={Solution} />
            <Route path="/issues/test/" component={Issue} />
            <Route path="/issues/new/" component={NewIssue} />
            <Route path="/issues" component={Issues} />

            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
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
