import { connect } from 'react-redux';
import Header from '../Components/Header';
import { signOutUser } from '../redux-token-auth-config'
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentUser: state.tokenAuth.currentUser,
});

export default withRouter(connect(mapStateToProps, { signOutUser })(Header));
