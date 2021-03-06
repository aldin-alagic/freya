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
import UserAgreement from "./components/userAgreement";
import PrivacyPolicy from "./components/privacyPolicy";
import AboutUs from "./components/aboutUs";
import Pricing from "./components/pricing";
import HowItWorks from "./components/howItWorks";
import FindSolution from "./components/findSolution/findSolution";
import BecomeExpert from "./components/becomeExpert";
import SolutionView from "./components/findSolution/solutionView/solutionView";
import ReactTooltip from "react-tooltip";
import Report from "./components/report";
import Profile from "./components/profile/profile";
import Issues from "./components/issues/issues";

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
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
        <NavBar />
        <main className="container col-9">
          <Switch>
            <Route path="/help-and-support" component={HelpAndSupport} />
            <Route path="/faq" component={FAQ} />
            <Route path="/submit-ticket" component={SubmitTicket} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/user-agreement" component={UserAgreement} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/become-an-expert" component={BecomeExpert} />
            <Route path="/find-solution" component={FindSolution} />
            <Route path="/solution/test" component={SolutionView} />
            <Route path="/issues" component={Issues} />
            <Route path="/profile" component={Profile} />
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
