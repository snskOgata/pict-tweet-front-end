import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/reset.css'
import './stylesheets/App.css';
import { generateRequireSignInWrapper } from "redux-token-auth";

import Header from './Containers/Header';
import SignUpUser from './Components/SignUpUser';
import SignInUser from './Components/SignInUser';
import NewTweet from './Containers/NewTweet'
import Root from './Containers/Root';
import ShowTweet from './Containers/ShowTweet';

import bgImage from './images/black-abstract-wallpaper.jpg';

export default class App extends React.Component {
  render() {
    // const requireSignIn = generateRequireSignInWrapper({
    //   redirectPathIfNotSignedIn: "/signin",
    // });

    return (
      <div className="App" style={{ backgroundImage: `url(${bgImage})`, minHeight: '100vh', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <Router>
          <div>
            <div id="header">
              <Route component={Header} />
            </div>
            <Switch>
              <Route exact path="/" component={Root} />
              <Route exact path="/sign_up" component={SignUpUser} />
              <Route exact path="/sign_in" component={SignInUser} />
              <Route exact path="/tweets/new" component={NewTweet} />
              <Route path="/tweets/:id"
                render={
                  ({ match }) => <ShowTweet tweetId={match.params.id} />
                }
              />
              {/* <Route exact path="/" component={requireSignIn(MyPage)} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}