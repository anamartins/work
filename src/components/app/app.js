import React from "react";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "../../views/homeView/homeView";
import AboutMe from "../../views/aboutMe/aboutMe";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route exact path="/about-me">
              <AboutMe />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
