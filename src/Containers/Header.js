import { connect } from 'react-redux';
import Header from '../Components/Header';

const mapStateToProps = (state) => ({
  currentUser: state.tokenAuth.currentUser
});

export default connect(mapStateToProps)(Header);
