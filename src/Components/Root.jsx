import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Tweets from '../Containers/Tweets';


export default class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Pict Tweet</h1>
        <div>
          {this.props.currentUser.isSignedIn ? (
            <>
              <Tweets />
            </>
          ) : (
              <>
                <Link to="/sign_up" style={{ marginRight: '20px' }}>
                  <Button>新規登録</Button>
                </Link>
                <Link to="/sign_in">
                  <Button>ログイン</Button>
                </Link>
              </>
            )}
        </div>
      </div >
    );
  }
}