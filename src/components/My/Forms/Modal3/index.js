import { withFormik } from 'formik';
import Modal3 from './Modal3.js';

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

  displayName: 'Modal3'
})(Modal3);
