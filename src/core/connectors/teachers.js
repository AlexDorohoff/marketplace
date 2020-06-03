import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TeachersActions from '../actions/teachers';

const mapStateToProps = state => ({ teachers: state.teachers });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(TeachersActions, dispatch) });

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
