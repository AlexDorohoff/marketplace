import { withRouter } from 'react-router';
import { withFormik } from 'formik';
import FormData from 'form-data';
import TeacherForm from './TeacherForm';
import ProfileServices from '../../../../core/services/profile';
import config from '../../../../config';

export default withRouter(
  withFormik({
    /* mapping props and set default values  */
    mapPropsToValues: ({ data }) => {
      return {
        name: data.name,
        phone: data.phone,
        initialPhone: data.phone,
        image: `${config.baseUrl}/avatars/${
          data.image
        }?${Date.now().toString()}`,
        experience: data.profile ? data.profile.experience : '',
        edo: data.profile ? data.profile.edo : '',
        yourself: data.profile ? data.profile.yourself : '',
        vk: data.profile ? data.profile.vk : '',
        twitter: data.profile ? data.profile.twitter : '',
        facebook: data.profile ? data.profile.facebook : '',
        telegram: data.profile ? data.profile.telegram : '',
        viber: data.profile ? data.profile.viber : '',
        whatsapp: data.profile ? data.profile.whatsapp : '',
        instagram: data.profile ? data.profile.instagram : '',
        youtube: data.profile ? data.profile.youtube : '',
        ok: data.profile ? data.profile.ok : '',
        documents: data.profile ? data.profile.documents : '',
      };
    },

    /* form data validation  */
    validate: (values, props) => {
      const errors = {};
      if (!values.name) errors.name = 'Введите название';
      if (!values.experience) errors.experience = 'Укажите опыт работы';
      values.phone = values.phone.replace(/[-+]/g, '');
      if (!values.phone || values.phone.length !== 11)
        errors.phone = 'Введите номер телефона';
      if (!values.edo) errors.edo = 'Укажите ваше образование';

      if (values.pwd && values.pwd.length < 6)
        errors.pwd = 'Пароль не менее 6 символов';
      if (values.pwd && values.pwd !== values.pwd1)
        errors.pwd1 = 'Пароли не совпадают';

      return errors;
    },

    /* form submission processing */
    handleSubmit: (values, { setErrors }) => {
      const newData = {
        name: values.name,
        profile: {
          experience: values.experience,
          edo: values.edo,
          yourself: values.yourself,
          vk: values.vk,
          twitter: values.twitter,
          facebook: values.facebook,
          telegram: values.telegram,
          viber: values.viber,
          whatsapp: values.whatsapp,
          instagram: values.instagram,
          youtube: values.youtube,
          ok: values.ok,
          documents: values.documents,
        },
      };

      if (values.initialPhone !== values.phone) {
        newData.phone = values.phone;
      }

      if (values.pwd) {
        newData.password = values.pwd;
      }

      ProfileServices.update(newData)
        .then(() => {
          if (values.image && typeof values.image !== 'string') {
            const image = new FormData();
            image.append('image', values.image);
            ProfileServices.updateAvatar(image).catch(() => {
              setErrors({ global: 'Не удалось изменить аватар' });
            });
          }
        })
        .catch(() => {
          setErrors({ global: 'Не удалось изменить профиль' });
        });
    },
    displayName: 'TeacherForm',
  })(TeacherForm)
);
