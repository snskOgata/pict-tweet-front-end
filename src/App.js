import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { generateRequireSignInWrapper } from "redux-token-auth";

function App() {
  const requireSignIn = generateRequireSignInWrapper({
    redirectPathIfNotSignedIn: "/signin",
  })

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={requireSignIn(Root)} />
          <Route exact path="/signIn" component={SignInUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
