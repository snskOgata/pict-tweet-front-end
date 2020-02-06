import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { generateRequireSignInWrapper } from "redux-token-auth";
import Header from './Containers/Header';
import SignUpUser from './Components/SignUpUser';
import SignInUser from './Components/SignInUser';
import Root from './Containers/Root';

export default class App extends React.Component {
  render() {
    // const requireSignIn = generateRequireSignInWrapper({
    //   redirectPathIfNotSignedIn: "/signin",
    // });

    return (
      <div className="App" >
        <Router>
          <div>
            <div id="header">
              <Route component={Header} />
            </div>
            <Switch>
              <Route exact path="/" component={Root} />
              <Route exact path="/sign_up" component={SignUpUser} />
              <Route exact path="/sign_in" component={SignInUser} />
              {/* <Route exact path="/" component={requireSignIn(MyPage)} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}