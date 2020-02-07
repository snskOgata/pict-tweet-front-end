import { connect } from 'react-redux';
import ShowTweet from "../Components/ShowTweet";
import * as actions from '../Actions/ShowTweet';

const mapStateToProps = (state) => ({
  title: state.ShowTweet.title,
  image: state.ShowTweet.image,
  content: state.ShowTweet.content,
  userId: state.ShowTweet.userId,
  error: state.ShowTweet.error,
});

const mapDispatchToProps = dispatch => ({
  onMount(tweetId) {
    dispatch(actions.fetchTweet(tweetId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTweet);