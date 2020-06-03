import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import Textarea from 'arui-feather/textarea';
import PhoneInput from 'arui-feather/phone-input';
import CheckBox from 'arui-feather/checkbox';
import RadioGroup from 'arui-feather/radio-group';
import Radio from 'arui-feather/radio';
import Link from 'arui-feather/link';
import './styles.scss';

/**
 * Request form
 */
export default function RequestForm({
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
  handleBlur,
  isSubmitting,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className={
        values.formType === 'teacher'
          ? 'request-form1  request-form1-teacher'
          : 'request-form1 request-form1-course'
      }
    >
      <div className="request-form1-wrapper1">
        <h2 className="text-center"> Задать вопрос </h2>
        <div className="request-form1-container">
          <GridRow>
            <GridCol
              width={{ mobile: 12, tablet: 12, desktop: 12 }}
              className="form-field"
            >
              <Textarea
              minRows={3}
              label='Сообщение'
              />
              <br/>
              <br/>

              <Input
                id="name"
                placeholder="ФИО"
                value={values.name}
                onChange={value => setFieldValue('name', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.name && touched.name && <span>{errors.name}</span>
                }
                disabled={isSubmitting}
              />
              <div className="name-explanation1">
                Пожалуйста, заполните это поле в правильном порядке. Например,
                «Кузнецов Сергей Петрович» или «Петрова Екатерина»
              </div>
            </GridCol>
            <GridCol
              width={{ mobile: 12, tablet: 6, desktop: 6 }}
              className="form-field"
            >
              <PhoneInput
                id="phone"
                // placeholder="Номер телефона"
                value={values.phone}
                onChange={value => setFieldValue('phone', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.phone && touched.phone && <span>{errors.phone}</span>
                }
                disabled={isSubmitting}
                // mask='+7 (111) 111 11 11'
              />
            </GridCol>
            <GridCol
              width={{ mobile: 12, tablet: 6, desktop: 6 }}
              className="form-field"
            >
              <Input
                id="email"
                placeholder="Электронная почта"
                value={values.email}
                onChange={value => setFieldValue('email', value)}
                onBlur={handleBlur}
                width="available"
                error={
                  errors.email && touched.email && <span>{errors.email}</span>
                }
                disabled={isSubmitting}
              />
            </GridCol>
          </GridRow>
          <div className="form-field">
            <CheckBox
              id="agreement"
              text={
                <span>
                  Мною были внимательно изучены условия
                  <Link pseudo className="link_agree1">
                    {' '}
                    Соглашения
                  </Link>
                </span>
              }
              checked={values.agreement}
              onChange={isChecked => setFieldValue('agreement', isChecked)}
            />
            <CheckBox
              id="agree"
              text='Нажимая на кнопку "Отправить", я принимаю условия соглашения.'
              checked={values.agree}
              onChange={isChecked => setFieldValue('agree', isChecked)}
            />
          </div>
          {values.formType === 'teacher' && (
            <div className="form-field">
              <RadioGroup
                type="line"
                value={values.userType}
                onChange={value => setFieldValue('userType', value)}
              >
                <Radio text="Ученик" value="student" />
                <Radio text="Родитель" value="parent" />
              </RadioGroup>
            </div>
          )}

          <div className="form-field text-center">
            <Button
              type="submit"
              className={
                values.formType === 'teacher'
                  ? 'button button_secondary'
                  : 'button button_default'
              }
              disabled={isSubmitting}
            >
              Отправить
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
