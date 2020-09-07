import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="main-container">
        <main className="container">
          <Switch>
            <Route path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
