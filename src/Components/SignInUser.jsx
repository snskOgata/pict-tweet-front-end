import React from 'react';
import { Link } from 'react-router-dom'

export default class SigninUser extends React.Component {
  render() {
    return (
      <div>
        <h1>新規登録ページ</h1>
        <Link to="/">戻る</Link>
      </div>
    );
  }
}