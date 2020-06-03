import { withRouter } from 'react-router';
import { withFormik } from 'formik';
import FormData from 'form-data';
import CourseForm from './CourseForm';
import CoursesServices from '../../../../core/services/courses';
import useCourses from '../../../../core/connectors/courses';

export default useCourses(withRouter(withFormik({
  /* mapping props and set default values  */
  mapPropsToValues: props => ({
    title: '',
    subject: '',
    price: '',
    scope: '',
    schedule: '',
    tasks: '',
    annotation: '',
    teacherPhoto: props.profile.image,
    teachername: props.profile.name,
    teacherabout: props.profile.profile ? props.profile.profile.yourself : ''
  }),

  /* form data validation  */
  validate: (values, props) => {
    const errors = {};
    if (!values.title) errors.title = 'Введите название товара';
    if (!values.subject) errors.subject = 'Введите название раздела';
    if (!values.price) errors.price = 'Укажите цену товара';
    if (!values.scope) errors.scope = 'Укажите количество товара';
    if (!values.schedule) errors.schedule = 'Укажите наличие товара';
    if (!values.tasks) errors.tasks = 'Укажите назначение товара';
    if (!values.annotation) errors.annotation = 'Укажите аннотацию товара';
    return errors;
  },

  /* form submission processing */
  handleSubmit: (values, { props, setErrors }) => {
    const data = new FormData();

    const description = {
      scope: values.scope,
      schedule: values.schedule,
      subject: values.subject,
      placemap: values.placemap,
      description: values.description,
      courseAuditory: values.courseAuditory,
      teacherPhoto: values.teacherPhoto,
      teachername: values.teachername,
      teacherabout: values.teacherabout
    };
    const contents = {
      tasks: values.tasks,
      programm: values.programm,
    };

    data.append('image', values.image);
    data.append('title', values.title);
    data.append('price', values.price);
    data.append('annotation', values.annotation);
    data.append('description', JSON.stringify(description));
    data.append('contents', JSON.stringify(contents));
    data.append('duration', 0);

    CoursesServices.createCourse(data)
      .catch(() => {
        setErrors({ global: 'Не удалось создать товар' });
      });
  },
  displayName: 'CourseForm',
})(CourseForm)));
