import React from "react";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "../../views/homeView/homeView";

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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
