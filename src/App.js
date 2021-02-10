import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReactTooltip from "react-tooltip";
import { Provider } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { HelpAndSupport } from "./components/helpAndSupport/HelpAndSupport";
import { Faq } from "./components/faq/Faq";
import { SubmitTicket } from "./components/submitTicket/SubmitTicket";
import { ContactUs } from "./components/contactUs/ContactUs";
import { UserAgreement } from "./components/userAgreement/UserAgreement";
import { PrivacyPolicy } from "./components/privacyPolicy/PrivacyPolicy";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Pricing } from "./components/pricing/Pricing";
import { BecomeExpert } from "./components/becomeExpert/BecomeExpert";
import { HowItWorks } from "./components/howItWorks/HowItWorks";
import { Solutions } from "./components/solutions/Solutions";
import { Solution } from "./components/solutions/solution/Solution";
import { Report } from "./components/report/Report";
import { Profile } from "./components/profile/Profile";
import { Issues } from "./components/issues/Issues";
import { Issue } from "./components/issues/issue/Issue";
import { NewIssue } from "./components/issues/newIssue/NewIssue";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import ProtectedRoute from "./components/common/protectedRoute/ProtectedRoute";
import { Home } from "./components/home/Home";
import { Offer } from "./components/offer/Offer";
import configureStore from "./store/configureStore";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/styles/rsuite-default.css";

class App extends Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <div className="main-container">
          <ReactTooltip place="right" type="dark" effect="solid" />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            limit={1}
            draggable
            pauseOnHover
            bodyClassName="p-3 text-justify"
          />
          <Report />
          <Navbar />
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
              <Route path="/offers/:id" component={Offer} />
              <ProtectedRoute path="/profile" component={Profile} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/" component={Home} />
              <Redirect to="/" />
            </Switch>
          </main>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
