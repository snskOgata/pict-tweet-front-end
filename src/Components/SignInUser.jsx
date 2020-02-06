import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { signInUser as signIn } from '../redux-token-auth-config'
import { Redirect } from 'react-router-dom';

class SignInUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submitForm(e) {
    e.preventDefault()
    const { signIn } = this.props
    const {
      email,
      password,
    } = this.state
    signIn({ email, password })
      .then(() => {
        console.log("成功")
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
      <div style={{ width: '50%', padding: '20px', margin: '0 auto' }}>
        <h1>ログインページ</h1>
        <Form onSubmit={this.submitForm}>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.handleChangeEmail} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={this.state.password} onChange={this.handleChangePassword} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <hr />
        <Link to='/'>Homeに戻る</Link>
      </div >
    );
  }
}

export default connect(
  null,
  { signIn },
)(SignInUser)