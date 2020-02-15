import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShowTweet extends Component {
  componentWillMount() {
    this.props.onMount(this.props.tweetId);
  }
  render() {
    const { title, image, content } = this.props
    return (
      <div>
        <img src={`http://localhost:3001${image}`} style={{ maxHeight: '600px', maxWidth: '80%' }} />
        <h1 style={{ fontSize: '32px' }}>{title}</h1>
        <p>{content}</p>
      </div>
    )
  }
}

ShowTweet.propTypes = {
  title: PropTypes.string,
  onMount: PropTypes.func.isRequired,
}
