import { withFormik } from 'formik';
import RequestForm from './RequestForm.js';

export default withFormik({

  /* mapping props and set default values  */
  mapPropsToValues: (props) => ({
    formType: props.formType || 'teacher', // teacher || course
    name: '',
    phone: '',
    email: '',
    userType: 'student', // student || parent
    agree: false,
    agreement: false,
  }),

  /* form data validation  */
  validate: (values, props) => {
    const errors = {};
    if (!values.name) errors.name = 'Введите ФИО';
    if (!values.phone) errors.phone = 'Введите номер телефона';
    else if (!/^(\+7|\+8)\s([0-9]{3})\s([0-9]{3})\s([0-9]{2})\s([0-9]{2})$/.test(values.phone)) errors.phone = "Введите корректный номер";
    if (!values.email) errors.email = 'Введите Email';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = "Введите корректный Email";
    if (values.formType === 'course' && !values.agree) errors.agree = 'Примите условия';
    return errors;
  },

  /* form submission processing */
  handleSubmit: (values, { props, setSubmitting }) => {

  },
  displayName: 'RequestForm'
})(RequestForm);
