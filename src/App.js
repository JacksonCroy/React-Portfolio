import React from "react";
import Nav from "./components/Nav";
import Portfolio from "./components/pages/portfolio";
import Contact from "./components/pages/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GitRepos from "./components/pages/repos";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/React-Portfolio" component={Portfolio} />
          <Route exact path="/home" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Gitrepos" component={GitRepos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
