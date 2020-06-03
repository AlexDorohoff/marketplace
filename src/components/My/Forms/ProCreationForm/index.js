import { withFormik } from 'formik';
import ProCreationForm from './ProCreationForm.js';

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
  displayName: 'ProCreationForm'
})(ProCreationForm);
