import { withFormik } from 'formik';
import ModalTeacherCard from './ModalTeacherCard.js';

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

  displayName: 'ModalTeacherCard'
})(ModalTeacherCard);
