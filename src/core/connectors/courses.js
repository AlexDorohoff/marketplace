import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CoursesActions from '../actions/courses';

const mapStateToProps = state => ({
  courses: state.courses
});
const mapDispatchToProps = dispatch => ({...bindActionCreators(CoursesActions, dispatch)});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
