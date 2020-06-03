import { withFormik } from 'formik';
import ModalTeacherMessage from './ModalTeacherMessage.js';

export default withFormik({

  /* mapping props and set default values  */
  mapPropsToValues: (props) => ({
  }),

  /* form data validation  */
  validate: (values, props) => {

  },

  /* form submission processing */
  handleSubmit: (values, { props, setSubmitting }) => {

  },

  displayName: 'ModalTeacherMessage'
})(ModalTeacherMessage);
