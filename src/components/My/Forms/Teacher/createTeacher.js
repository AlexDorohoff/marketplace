import { withFormik } from 'formik';
import TeacherForm from './TeacherForm';

export default withFormik({
  /* mapping props and set default values  */
  mapPropsToValues: ({ data }) => ({
    name: '',
    email: '',
    phone: '',
    image: '',
  }),

  /* form data validation  */
  validate: (values, props) => {},

  /* form submission processing */
  handleSubmit: (values, { props, setSubmitting }) => {},
  displayName: 'TeacherForm',
})(TeacherForm);
