import React from 'react';
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <>
          <Link to="/">Pict-Tweet</Link>
        </>
        <>
          {this.props.currentUser.isSignedIn ? (
            <Link to='/#'>ログアウト</Link>
          ) : (
              <Link to="/signIn">新規登録</Link>
            )
          }
        </>
      </div >
    );
  }
}