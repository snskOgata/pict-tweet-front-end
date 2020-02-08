import { connect } from 'react-redux';
import Tweets from "../Components/Tweets";
import * as actions from '../Actions/Tweets';

const mapStateToProps = (state) => ({
  tweets: state.Tweets.tweets,
  error: state.Tweets.error,
});

const mapDispatchToProps = dispatch => ({
  onMount() {
    dispatch(actions.fetchTweets());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);