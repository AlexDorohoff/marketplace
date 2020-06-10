import { withFormik } from 'formik';
import ModalCartRequest from './ModalCartRequest';
import CoursesServices from '../../../../core/services/courses';

export default withFormik({
  /* mapping props and set default values  */
  mapPropsToValues: props => {
    console.log(props);
    // const date = new Date(props.event.start);
    const date = new Date();
    let dd = date.getDate();
    dd = (dd > 9 ? '' : '0') + dd;
    let mm = date.getMonth() + 1;
    mm = (mm > 9 ? '' : '0') + mm;
    const YYYY = date.getFullYear();

    const dt = `${YYYY}-${mm}-${dd}`;

    return {
      date: dt,
      time: new Date().toLocaleTimeString(),
      // time: new Date(props.event.start).toLocaleTimeString(),
      title: props.course.title,
      price: props.course.price,
      message: '',
    };
  },

  /* form data validation  */
  validate: values => {
    const errors = {};
    if (!values.date) errors.date = 'Укажите желаемую дату';
    if (!values.time) errors.time = 'Укажите время';
    return errors;
  },

  /* form submission processing */
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    const data = {
      teacher_id: props.course.user.id,
      course_id: props.course.id,
      requested_date: `${values.date} ${values.time}`,
      message: values.message || '',
    };

    CoursesServices.sendCourseRequest(data)
      .then(response => {
        setSubmitting(false);
        console.log('Request sent', response);
        props.onClose();
      })
      .catch(() => {
        setSubmitting(false);
        setErrors({ global: 'Не удалось отправить запрос' });
      });
  },

  displayName: 'ModalCartRequest',
})(ModalCartRequest);
