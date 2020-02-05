import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import { generateRequireSignInWrapper } from "redux-token-auth";
import SignInUser from './Components/SignInUser'
import Root from './Components/Root'

export default class App extends React.Component {
  render() {

    return (
      <div className="App" >
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