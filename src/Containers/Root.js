import { connect } from 'react-redux';
import Root from '../Components/Root';

const mapStateToProps = (state) => ({
  currentUser: state.tokenAuth.currentUser
});

export default connect(mapStateToProps)(Root);
