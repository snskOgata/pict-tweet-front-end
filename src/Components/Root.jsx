import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';


export default class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <div>
          {this.props.currentUser.isSignedIn ? (
            <>
              <p> id: {this.props.currentUser.attributes.id}</p>
              <p>name: {this.props.currentUser.attributes.name}</p>
              <p>email: {this.props.currentUser.attributes.email}</p>
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