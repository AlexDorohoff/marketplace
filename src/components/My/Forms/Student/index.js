import { withRouter } from 'react-router';
import { withFormik } from 'formik';
import StudentForm from './StudentForm.js';
import FormData from 'form-data';
import ProfileServices from '../../../../core/services/profile';
import config from '../../../../config';
import { files } from '../../../../core/utils/testData';

export default withRouter(
  withFormik({
    /* mapping props and set default values  */
    mapPropsToValues: ({ data }) => {
      // console.log('data: ', data);
      return {
        name: data.name,
        phone: data.phone,
        initialPhone: data.phone,
        image: data.image
          ? `${config.baseUrl}/avatars/${data.image}?${Date.now().toString()}`
          : files[0],
        // experience: data.profile ? data.profile.experience : '',
        // vk: data.profile ? data.profile.vk : '',
        // twitter: data.profile ? data.profile.twitter : '',
        // facebook: data.profile ? data.profile.facebook : '',
        // telegram: data.profile ? data.profile.telegram : '',
        // viber: data.profile ? data.profile.viber : '',
        // whatsapp: data.profile ? data.profile.whatsapp : '',
        // instagram: data.profile ? data.profile.instagram : '',
        // youtube: data.profile ? data.profile.youtube : '',
        // ok: data.profile ? data.profile.ok : '',
      };
    },

    /* form data validation  */
    validate: (values, props) => {
      const errors = {};
      if (!values.name) errors.name = 'Введите ФИО';

      values.phone = values.phone.replace(/[-+]/g, '');
      if (!values.phone || values.phone.length !== 11)
        errors.phone = 'Введите номер телефона';

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
        // profile: {
        //   experience: values.experience,
        //   vk: values.vk,
        //   twitter: values.twitter,
        //   facebook: values.facebook,
        //   telegram: values.telegram,
        //   viber: values.viber,
        //   whatsapp: values.whatsapp,
        //   instagram: values.instagram,
        //   youtube: values.youtube,
        //   ok: values.ok
        // },
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
    displayName: 'StudentForm',
  })(StudentForm)
);
