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

  async fetchTweet() {
    let formPayLoad = new FormData();
    formPayLoad.append('title', this.state.title);
    formPayLoad.append('image', this.state.image);
    formPayLoad.append('content', this.state.content);
    formPayLoad.append('user_id', '2');

    const res = await fetch('http://localhost:3001/tweets', {
      credentials: 'same-origin',
      headers: {},
      method: 'POST',
      body: formPayLoad
    });
    const data = await (await res).json();
    return data
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
    this.fetchTweet()
      .then((data) => {
        this.props.history.push(`/`);
      })
      .catch(error => {
        const {
          status,
          statusText
        } = error.response;
        alert(`Error! HTTP Status: ${status} ${statusText}`);
      })
  }


  render() {
    return (
      <div style={{ width: '50%', padding: '20px', margin: '0 auto' }}>
        <h1>新規投稿</h1>
        <Form onSubmit={this.submitForm} style={{ textAlign: 'left', position: 'relative' }}>
          <Form.Group controlId="title">
            <Form.Label>タイトル(必須)</Form.Label>
            <Form.Control type="text" value={this.state.title} onChange={this.handleChangeTitle} />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>投稿画像(必須)</Form.Label>
            <Form.Control type="file" ref="file" onChange={this.handleChangeFile} />
            <img src={this.state.image_url} style={{ maxWidth: '100%' }} />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>詳細:</Form.Label>
            <Form.Control as="textarea" rows="3" value={this.state.content} onChange={this.handleChangeContent} />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ position: 'absolute', right: 'calc(50% - 37px)' }}>
            Submit
          </Button>
        </Form>
      </div >
    );
  }
}