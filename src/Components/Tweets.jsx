import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

export default class Tweets extends Component {
  componentWillMount() {
    this.props.onMount();
  }
  discribeTweets(error, tweets) {
    console.log("Hello")
    console.log(tweets)
    if (error) {
      return <p>エラーが発生しました。</p>;
    } else if (typeof tweets === 'undefined') {
      return <p>データ読み込み中…</p>;
    } else {
      return (
        <Container fluid style={{ marginTop: '40px' }}>
          <ul style={{ listStyle: 'none', paddingInlineStart: '0' }}>
            <Row style={{ justifyContent: 'center' }}>
              {tweets.map(tweet => (
                <li key={`tweet-${tweet.id}`}>
                  <Col xs={6} md={4} lg={3}>
                    <Card style={{ width: '300px', height: '400px', marginBottom: '30px', backgroundColor: 'transparent', border: '0.5px solid white' }}>
                      <Card.Img variant="top" src={`http://localhost:3001${tweet.image}`} style={{ height: '200px', width: 'auto', maxWidth: '98%', margin: '5px auto' }} />
                      <Card.Body>
                        <Card.Title>{tweet.title}</Card.Title>
                        <Card.Text style={{ height: '65px', overflow: 'hidden' }}>
                          {tweet.content}
                        </Card.Text>
                        <Link to={`/tweets/${tweet.id}`}>
                          <Button variant="outline-light" >詳細ページ</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </li>
              ))}
            </Row>
          </ul>
        </Container>
      );
    }
  }
  render() {
    const { tweets, error } = this.props
    return (
      this.discribeTweets(error, tweets)
    );
  }
}

