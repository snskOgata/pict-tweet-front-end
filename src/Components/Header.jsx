import React from 'react';
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this)
  }
  signOut(e) {
    e.preventDefault()
    const { signOutUser } = this.props
    signOutUser()
      .then(() => {
        console.log("成功")
        this.props.history.push('/')
      })
      .catch(error => {
        const {
          status,
          statusText
        } = error.response;
        console.log(`Error! HTTP Status: ${status} ${statusText}`);
      })
  }
  render() {
    return (
      <div className='header'>
        <>
          <Link to="/">Pict-Tweet</Link>
        </>
        <>
          {this.props.currentUser.isSignedIn ? (
            <Link to='/#' onClick={this.signOut}>ログアウト</Link>
          ) : (
              <Link to="/sign_up">新規登録</Link>
            )
          }
        </>
      </div >
    );
  }
}