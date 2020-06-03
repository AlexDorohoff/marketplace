import React from 'react';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Vk from '../../../../theme/images/account/vk.svg';
import Facebook from '../../../../theme/images/account/facebook.svg';
import Ok from '../../../../theme/images/account/ok.svg';
import Instagram from '../../../../theme/images/account/instagram.svg';
import Twitter from '../../../../theme/images/account/twitter.svg';
import Youtube from '../../../../theme/images/account/youtube.svg';

/**
 * Request form
 */
export default function SignInForm({values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <div className="text-center">Введите данные</div>
      </div>
      <div className="form-field">
        <Input
          id="username"
          placeholder="e-mail"
          value={values.username}
          onChange={value => setFieldValue('username', value)}
          onBlur={handleBlur}
          width="available"
          error={errors.username && touched.username && (<span>{errors.username}</span>)}
          disabled={isSubmitting}
          className="input_secondary"
        />
      </div>
      <div className="form-field">
        <Input
          id="password"
          type='password'
          placeholder="Пароль"
          value={values.password}
          onChange={value => setFieldValue('password', value)}
          onBlur={handleBlur}
          width="available"
          error={errors.password && touched.password && (<span>{errors.password}</span>)}
          disabled={isSubmitting}
          className="input_secondary"
        />
      </div>
      <div className="form-field form-buttons">
        <Button type="submit" className="button button_default button_modal" disabled={isSubmitting}>Войти</Button>
      </div>
      {errors.global && <div className="message-error text-center m-t10">{errors.global}</div>}
      <div className="form-social">
        <div className="form-social-title">В соцсетях</div>
        <img src={Vk} alt=""/>
        <img src={Facebook} alt=""/>
        <img src={Ok} alt=""/>
        <img src={Instagram} alt=""/>
        <img src={Twitter} alt=""/>
        <img src={Youtube} alt=""/>
      </div>
    </form>
  );
};

