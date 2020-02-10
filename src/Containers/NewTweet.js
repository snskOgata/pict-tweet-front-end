import { connect } from 'react-redux';
import NewTweet from '../Components/NewTweet';

const mapStateToProps = (state) => ({
  currentUser: state.tokenAuth.currentUser
});

export default connect(mapStateToProps)(NewTweet);
