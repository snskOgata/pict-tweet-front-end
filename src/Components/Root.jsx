import React from 'react';
import { Link } from 'react-router-dom'

export default class SigninUser extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <Link to="/signIn">新規登録</Link>
      </div>
    );
  }
}