import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShowTweet extends Component {
  componentWillMount() {
    this.props.onMount(this.props.tweetId);
  }
  render() {
    return (
      <div>
        <h1>TweetID:{this.props.tweetId}</h1>
      </div>
    )
  }
}

ShowTweet.propTypes = {
  tweetId: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
}
