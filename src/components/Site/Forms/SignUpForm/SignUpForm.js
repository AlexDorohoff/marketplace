import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import PhoneInput from 'arui-feather/phone-input';
import Vk from '../../../../theme/images/account/vk.svg';
import Twitter from '../../../../theme/images/account/twitter.svg';
import Facebook from '../../../../theme/images/account/facebook.svg';
import Instagram from '../../../../theme/images/account/instagram.svg';
import Youtube from '../../../../theme/images/account/youtube.svg';
import Ok from '../../../../theme/images/account/ok.svg';
import Link from 'arui-feather/link';
import CheckBox from 'arui-feather/checkbox';
import Radio from 'arui-feather/radio';
import RadioGroup from 'arui-feather/radio-group';

/**
 * Request form
 */
export default function SignUpForm({
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
  handleBlur,
  isSubmitting,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {values.formType === 'signUp' ? (
        <>
          <div className="form-field">
            <div className="text-center">Введите данные</div>
          </div>
          <div className="form-field">
            <Input
              id="name"
              placeholder="ФИО"
              value={values.name}
              onChange={value => setFieldValue('name', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.name && touched.name && <span>{errors.name}</span>}
              disabled={isSubmitting}
              className="input_secondary"
            />
          </div>
          <div
            className="form-field form-text text-left"
            style={{ color: '#979797' }}
          >
            Пожалуйста, заполните это поле в правильном порядке. Например,
            «Иванов Сергей Петрович» или «Петрова Екатерина»
          </div>
          <div className="form-field">
            <RadioGroup
              type="line"
              value={values.userType}
              onChange={value => setFieldValue('userType', value)}
            >
              <Radio text="Покупатель" value="student" />
              <Radio text="Продавец" value="teacher" />
            </RadioGroup>
          </div>
          <div className="form-field">
            <Input
              id="email"
              placeholder="e-mail"
              value={values.emailOrPhone}
              onChange={value => setFieldValue('email', value)}
              onBlur={handleBlur}
              width="available"
              autocomplete={false}
              error={
                errors.email && touched.email && <span>{errors.email}</span>
              }
              disabled={isSubmitting}
              className="input_secondary"
            />
          </div>
          <div className="form-field">
            <Input
              id="password"
              placeholder="Пароль"
              type="password"
              value={values.password}
              onChange={value => setFieldValue('password', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.password &&
                touched.password && <span>{errors.password}</span>
              }
              disabled={isSubmitting}
              className="input_secondary"
            />
          </div>
          <div className="form-field">
            <Input
              id="confirmPassword"
              placeholder="Повторите пароль"
              type="password"
              value={values.confirmPassword}
              onChange={value => setFieldValue('confirmPassword', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.confirmPassword &&
                touched.confirmPassword && <span>{errors.confirmPassword}</span>
              }
              disabled={isSubmitting}
              className="input_secondary"
            />
          </div>
          <div className="form-field">
            <Input
              id="phone"
              value={values.phone}
              onChange={value => setFieldValue('phone', value)}
              onBlur={handleBlur}
              width="available"
              error={
                errors.phone && touched.phone && <span>{errors.phone}</span>
              }
              disabled={isSubmitting}
              mask="+7-111-111-11-11"
              className="input_secondary"
            />
          </div>
          <div className="form-field text-left">
            <CheckBox
              id="agree"
              text={
                <span
                  className={`form-text${errors.agree ? ' message-error' : ''}`}
                >
                  Мною были внимательно изучены условия{' '}
                  <Link pseudo className="link_fourth">
                    Соглашения
                  </Link>
                </span>
              }
              checked={values.agree}
              onChange={isChecked => setFieldValue('agree', isChecked)}
              className="checkbox_secondary"
            />
          </div>
          <div className="form-field text-left">
            <CheckBox
              id="agreePersonal"
              text={
                <span
                  className={`form-text${
                    errors.agreePersonal ? ' message-error' : ''
                  }`}
                >
                  Я согласен на обработку персональных данных
                </span>
              }
              checked={values.agreePersonal}
              onChange={isChecked => setFieldValue('agreePersonal', isChecked)}
              className="checkbox_secondary"
            />
          </div>
        </>
      ) : (
        <>
          <div className="form-field">
            <div className="text-center">
              Введите код подтверждения, отправленный на Ваш e-mail после
              регистрации.
            </div>
          </div>
          <div className="form-field">
            <Input
              id="code"
              placeholder="Код"
              value={values.code}
              onChange={value => setFieldValue('code', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.code && touched.code && <span>{errors.code}</span>}
              disabled={isSubmitting}
              className="input_secondary"
            />
          </div>
        </>
      )}
      <div className="form-field form-buttons">
        <Button
          type="submit"
          className="button button_default button_modal"
          disabled={isSubmitting}
        >
          {values.formType === 'signUp' ? 'Регистрация' : 'Войти'}
        </Button>
      </div>
      {errors.global && (
        <div className="message-error text-center m-t10">{errors.global}</div>
      )}
      <div className="form-social">
        <div className="form-social-title">В соцсетях</div>
        <img src={Vk} alt="" />
        <img src={Facebook} alt="" />
        <img src={Ok} alt="" />
        <img src={Instagram} alt="" />
        <img src={Twitter} alt="" />
        <img src={Youtube} alt="" />
      </div>
    </form>
  );
}
