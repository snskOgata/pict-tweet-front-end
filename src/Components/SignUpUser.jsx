import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux'
import { registerUser } from '../redux-token-auth-config'

class SignUpUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordConfirmation = this.handleChangePasswordConfirmation.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleChangePasswordConfirmation(e) {
    this.setState({ password_confirmation: e.target.value });
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   axios.post('http://localhost:3001/auth', {
  //     name: this.state.name,
  //     email: this.state.email,
  //     password: this.state.password,
  //     password_confirmation: this.state.password_confirmation,
  //   }).catch(error => {
  //     const {
  //       status,
  //       statusText
  //     } = error.response;
  //     console.log(`Error! HTTP Status: ${status} ${statusText}`);
  //   });


  submitForm(e) {
    e.preventDefault()
    const { registerUser } = this.props
    const {
      name,
      email,
      password,
    } = this.state
    registerUser({ name, email, password }) // <-<-<-<-<- here's the important part <-<-<-<-<-
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
        <h1>新規登録ページ</h1>
        <Form onSubmit={this.submitForm}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.handleChangeName} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={this.state.email} onChange={this.handleChangeEmail} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={this.state.password} onChange={this.handleChangePassword} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password(確認用):</Form.Label>
            <Form.Control type="password" value={this.state.password_confirmation} onChange={this.handleChangePasswordConfirmation} />
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
  { registerUser },
)(SignUpUser)