import { withFormik } from 'formik';
import SignUpForm from './SignUpForm';
import AuthServices from '../../../../core/services/auth';

export default withFormik({
  /* mapping props and set default values  */
  mapPropsToValues: props => ({
    formType: 'signUp', // signUp || confirm
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    code: '',
    agree: false,
    agreePersonal: false,
    userType: 'student', // student || teacher
  }),

  /* form data validation  */
  validate: (values, props) => {
    const errors = {};
    if (values.formType === 'signUp') {
      // name
      if (!values.name) errors.name = 'Введите имя';
      else if (!new RegExp(/^[а-яА-я\s]+$/).test(values.name))
        errors.name = 'Введите корректное имя';
      // email
      if (!values.email) errors.email = 'Введите e-mail';
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Введите корректное e-mail';

      // phone
      // if (!values.phone.replace(/\s+/g, '')) errors.phone = 'Введите номер';
      // else if (values.phone.replace(/\s+/g, '').length !== 12)
      //   errors.phone = 'Введите корректный номер';

      values.phone = values.phone.replace(/[-+]/g, '');
      if (!values.phone || values.phone.length !== 11)
        errors.phone = 'Введите номер телефона';



      // password
      if (!values.password) errors.password = 'Введите пароль';
      else if (values.password.length < 6)
        errors.password = 'Введите корректный пароль (мин 6 символов)';
      // confirm password
      if (values.password && values.password !== values.confirmPassword)
        errors.confirmPassword = 'Пароли не совпадают';
      // agree
      if (!values.agree) errors.agree = 'Error';
      // agreePersonal
      if (!values.agreePersonal) errors.agreePersonal = 'Error';
    } else if (!values.code) errors.code = 'Введите код подтверждения';
    return errors;
  },

  /* form submission processing */
  handleSubmit: (
    values,
    { props, setSubmitting, setFieldValue, setErrors, setValues }
  ) => {
    if (values.formType === 'signUp') {
      const data = {
        phone: values.phone.replace(/\s+/g, ''),
        name: values.name,
        email: values.email,
        password: values.password,
        type: values.userType,
      };
      AuthServices.signUp(data)
        .then(() => {
          setSubmitting(false);
          setValues({
            formType: 'confirm',
            email: values.email,
            password: values.password,
          });
        })
        .catch(error => {
          setSubmitting(false);
          let errorMessage = 'Произошла ошибка. Пожалуйста обратитесь в службу технической поддержки.';
          if (error.email){
            errorMessage = 'Пользователь с таким email уже зарегистрирован в системе.'
          }
          if (error.phone){
            errorMessage = 'Пользователь с таким телефоном уже зарегистрирован в системе.'
          }

          setErrors({
            global:
              errorMessage,
          });
        });
    } else if (values.formType === 'confirm') {
      AuthServices.signIn({
        username: values.email,
        password: values.password,
      })
        .then(response => {
          setSubmitting(false);
          props.onLogin({ token: response.access_token, source: 'signUp' });
        })
        .catch(error => {
          setSubmitting(false);
          setErrors({
            global:
              'Произошла ошибка. Пожалуйста обратитесь в службу технической поддержки.',
          });
        });

      //Подтверждение пока не работает на бэке, делаем логин без подтверждения hanMaster 27_02_2020
      // AuthServices.signUpConfirm(values.code.trim())
      //   .then(() => {
      //     AuthServices.signIn({
      //       username: values.email,
      //       password: values.password,
      //     })
      //       .then(response => {
      //         setSubmitting(false);
      //         props.onLogin({ token: response.access_token, source: 'signUp' });
      //       })
      //       .catch(error => {
      //         setSubmitting(false);
      //         setErrors({
      //           global:
      //             'Произошла ошибка. Пожалуйста обратитесь в службу технической поддержки.',
      //         });
      //       });
      //   })
      //   .catch(error => {
      //     setSubmitting(false);
      //     setErrors({ global: 'Введите правильный код' });
      //   });
    }
  },
  displayName: 'SignUpForm',
})(SignUpForm);
