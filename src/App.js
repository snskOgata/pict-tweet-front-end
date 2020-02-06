import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { generateRequireSignInWrapper } from "redux-token-auth";
import Header from './Containers/Header';
import SignInUser from './Components/SignInUser';
import Root from './Containers/Root';

export default class App extends React.Component {
  render() {
    // const requireSignIn = generateRequireSignInWrapper({
    //   redirectPathIfNotSignedIn: "/signin",
    // });

    return (
      <div className="App" >
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route exact path="/signIn" component={SignInUser} />
            {/* <Route exact path="/" component={requireSignIn(MyPage)} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}