import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
