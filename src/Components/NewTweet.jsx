import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

export default class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      image_url: '',
      image: ''
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }
  handleChangeContent(e) {
    this.setState({ content: e.target.value });
  }
  handleChangeFile(e) {
    var files = e.target.files;
    var image_url = URL.createObjectURL(files[0]);
    this.setState({ image_url: image_url, image: files[0] });
  }

  submitForm(e) {
    e.preventDefault()
    if (this.state.title === "") {
      alert("タイトルが必要です")
      return false
    }
    if (this.state.image_url === "") {
      alert("画像が必要です")
      return false
    }
    let formPayLoad = new FormData();
    formPayLoad.append('title', this.state.title);
    formPayLoad.append('image', this.state.image);
    formPayLoad.append('content', this.state.content);
    formPayLoad.append('user_id', '2');

    fetch('http://localhost:3001/tweets', {
      credentials: 'same-origin',
      headers: {},
      method: 'POST',
      body: formPayLoad
    })
      .then(() => {
        console.log("成功")
        // this.props.history.push('/')
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
        <h1>新規投稿</h1>
        <Form onSubmit={this.submitForm}>
          <Form.Group controlId="title">
            <Form.Label>タイトル</Form.Label>
            <Form.Control type="text" value={this.state.title} onChange={this.handleChangeTitle} />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>投稿画像</Form.Label>
            <Form.Control type="file" ref="file" onChange={this.handleChangeFile} />
            <img src={this.state.image_url} style={{ maxWidth: '100%' }} />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>内容:</Form.Label>
            <Form.Control as="textarea" rows="3" value={this.state.content} onChange={this.handleChangeContent} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div >
    );
  }
}