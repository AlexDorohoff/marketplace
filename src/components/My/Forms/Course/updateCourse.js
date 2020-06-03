import { withRouter } from 'react-router';
import { withFormik } from 'formik';
import CourseForm from './CourseForm';
import CoursesServices from '../../../../core/services/courses';
import config from '../../../../config';
import useCourses from '../../../../core/connectors/courses';


export default useCourses(withRouter(
  withFormik({
    /* mapping props and set default values  */
    mapPropsToValues: ({ data }) => {

      const formData = {
        id: data.id,
        title: data.title,
        price: data.price,
        annotation: data.annotation,
        image: `${config.baseUrl}/courses/${data.image}?${Date.now().toString()}`,
      };
      let description;
      try {
        description = JSON.parse(data.description);
      } catch (e) {
        console.log(e);
      }
      if (description) {
        formData.scope = description.scope || '';
        formData.schedule = description.schedule || '';
        formData.subject = description.subject || '';
        formData.placemap = description.placemap || '';
        formData.description = description.description || '';
        formData.courseAuditory = description.courseAuditory || '';
        formData.teacherPhoto = description.teacherPhoto || '';
        formData.teachername = description.teachername || '';
        formData.teacherabout = description.teacherabout || '';
      }
      if (data.contents) {
        try {
          const contents = JSON.parse(data.contents);
          formData.tasks = contents.tasks || '';
          formData.programm = contents.programm;
        } catch (e) {
          formData.tasks = '';
          formData.programm = '';
        }
      }

      return formData;
    },

    /* form data validation  */
    validate: (values, props) => {
      const errors = {};
      if (!values.title) errors.title = 'Введите название товара';
      if (!values.subject) errors.subject = 'Введите название товара';
      if (!values.price) errors.price = 'Укажите цену товара';
      if (!values.scope) errors.scope = 'Укажите количество товара';
      if (!values.schedule) errors.schedule = 'Укажите наличие товара';
      if (!values.tasks) errors.tasks = 'Укажите назначение товара';
      if (!values.annotation) errors.annotation = 'Укажите аннотацию для товара';
      return errors;
    },

    /* form submission processing */
    handleSubmit: (values, { props, setErrors }) => {

      const data = {
        title: values.title,
        price: values.price,
        annotation: values.annotation,
        description: `${JSON.stringify({
          scope: values.scope,
          schedule: values.schedule,
          subject: values.subject,
          placemap: values.placemap,
          description: values.description,
          courseAuditory: values.courseAuditory,
          teacherPhoto: values.teacherPhoto,
          teachername: values.teachername,
          teacherabout: values.teacherabout,
        })}`,
        contents: `${JSON.stringify({
          tasks: values.tasks,
          programm: values.programm,
        })}`,
        duration: 0,
      };

    CoursesServices.updateCourse(values.id, data)
      .then(() => {
        if (values.image && typeof values.image !== 'string') {
          const image = new FormData();
          image.append('image', values.image);
          CoursesServices.updateCourseImage(values.id, image)
            .catch(() => {
              setErrors({ global: 'Не удалось обновить картинку товара' });
            });
        }
      })
      .catch(() => {
        setErrors({ global: 'Не удалось изменить товар' });
      });
    },
    displayName: 'CourseForm',
  })(CourseForm)
));
