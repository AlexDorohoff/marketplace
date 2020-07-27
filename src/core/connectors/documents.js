import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as DocumentsActions from '../actions/documents';

const mapStateToProps = state => ({
    documents: state.documents
});
const mapDispatchToProps = dispatch => ({...bindActionCreators(DocumentsActions, dispatch)});

export default Component => connect(mapStateToProps, mapDispatchToProps)(Component);
