import { connect } from 'react-redux';
import ShowTweet from "../Components/ShowTweet";
import * as actions from '../Actions/ShowTweet';

const mapStateToProps = (state, ownProps) => ({
  tweetId: ownProps.tweetId,
});

const mapDispatchToProps = dispatch => ({
  onMount(tweetId) {
    dispatch(actions.fetchTweet(tweetId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTweet);