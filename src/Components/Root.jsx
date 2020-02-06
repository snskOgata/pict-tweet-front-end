import React from 'react';
import { Link } from 'react-router-dom'


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
              <Link to="/signUp">新規登録</Link>
            )}
        </div>
      </div >
    );
  }
}