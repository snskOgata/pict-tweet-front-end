import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { generateRequireSignInWrapper } from "redux-token-auth";
import SignInUser from './Components/SignInUser'
import Root from './Components/Root'

function App() {
  const requireSignIn = generateRequireSignInWrapper({
    redirectPathIfNotSignedIn: "/signin",
  })

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/signIn" component={SignInUser} />
        {/* <Route exact path="/" component={requireSignIn(MyPage)} /> */}
      </Switch>
    </div>
  );
}

export default App;
