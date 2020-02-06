import { connect } from 'react-redux';
import Header from '../Components/Header';
import { signOutUser } from '../redux-token-auth-config'

const mapStateToProps = (state) => ({
  currentUser: state.tokenAuth.currentUser,
});

export default connect(mapStateToProps, { signOutUser })(Header);
