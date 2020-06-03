import { withFormik } from 'formik';
import SignInForm from './SignInForm';
import AuthServices from '../../../../core/services/auth';

export default withFormik({

  /* mapping props and set default values  */
  mapPropsToValues: (props) => ({
    username: '',
    password: '',
  }),

  /* form data validation  */
  validate: (values, props) => {
    const errors = {};
    // email
    if (!values.username) errors.username = 'Введите e-mail';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) errors.username = 'Введите корректный e-mail';
    // password
    if (!values.password) errors.password = 'Введите пароль';
    else if (values.password.length < 6) errors.password = 'Введите корректный пароль';
    return errors;
  },

  /* form submission processing */
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    AuthServices.signIn(values)
      .then((response) => {
        setSubmitting(false);
        props.onLogin({
          token: response.access_token,
          refreshToken: response.refresh_token,
          source: 'signIn'
        });
      })
      .catch((error) => {
        setSubmitting(false);
        setErrors({ global: 'Пользователь не определен. Введите корректные данные.'});
      });
  },
  displayName: 'SignInForm'
})(SignInForm);
