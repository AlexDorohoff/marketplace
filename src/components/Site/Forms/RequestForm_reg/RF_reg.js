/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import CheckBox from 'arui-feather/checkbox';
import './styles.scss';

/**
 * Request form
 */
export default function RequestForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="request-form  request-form-pravila">      
      <div className="">
        <h2 className="text-center">Есть вопрос? У нас есть ответ!</h2>
        <div className="request-form-container">
          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }} className="formfield">
              <Input
                id="email"
                placeholder="Введите электронную почту"
                value={values.email}
                onChange={value => setFieldValue('email', value)}
                onBlur={handleBlur}
                width="available"
                error={errors.email && touched.email && (<span>{errors.email}</span>)}
                disabled={isSubmitting}
              />
            </GridCol>
          </GridRow>
          <div className="ramka">
            <p>
              Пожалуйста, введите истинный адрес электронной почты.
            </p>
          </div>
          <div className="ramka">
            <CheckBox
              id="agreement"
              text={(
                <span>
                  Мною были внимательно изучены условия
                  <NavLink className="link4" to="/policy-useragreement"> Соглашения</NavLink> 
                </span>
              )}
              checked={values.agreement}
              onChange={isChecked => setFieldValue('agreement', isChecked)}
            />
            <CheckBox
              id="agree"
              text='Нажимая на кнопку "Подписаться", я принимаю условия соглашения.'
              checked={values.agree}
              onChange={isChecked => setFieldValue('agree', isChecked)}
            />
          </div>
          <div className="text-center m-t10">
            <Button type="submit" className="button button_settings-form">Связаться</Button>
          </div>
        </div>
      </div>
    </form>

  );
}
