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
        <h1>{title}</h1>
        <img src={`http://localhost:3001${image}`} style={{ maxWidth: '80%' }} />
        <p>{content}</p>
      </div>
    )
  }
}

ShowTweet.propTypes = {
  title: PropTypes.string,
  onMount: PropTypes.func.isRequired,
}
