import { withFormik } from 'formik';
import Modal6 from './Modal6.js';

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

  displayName: 'Modal1'
})(Modal6);
