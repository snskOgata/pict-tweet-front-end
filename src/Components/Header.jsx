import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

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
            <div>
              <Link to='/tweets/new'>
                <Button variant="outline-light">新規投稿</Button>
              </Link>
              <Link to='/#' onClick={this.signOut} style={{ marginLeft: '10px' }}>
                <Button variant="outline-light">ログアウト</Button>
              </Link>
            </div>
          ) : (
              <div>
                <Link to="/sign_up">
                  <Button variant="outline-light">新規登録</Button>
                </Link>
                <Link to="/sign_in" style={{ marginLeft: '10px' }}>
                  <Button variant="outline-light">ログイン</Button>
                </Link>
              </div>
            )
          }
        </>
      </div >
    );
  }
}