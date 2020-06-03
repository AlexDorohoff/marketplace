import React from 'react';
import './styles.scss';
import Button from 'arui-feather/button';
import Oval from '../../../../theme/images/oval.svg';

/**
 * Modal5 form
 */
export default function StudentForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="modal5_form">
      <div className="modal5_form-subhead">Документы</div>
      <div className="modal5_form-doctxt">
        Документы не загружены
      </div>
      <div className="text-center">
        <Button className="button button_secondary">Загрузить</Button>
      </div>
      <hr className="modal5_form-hr" />
      <div className="modal5_form-material">
        <span className="bold">Материалы</span>
        <img src={Oval} className="discipline-dot" alt="" />
        <span className="modal5_form-grey">Материалы не загружены</span>
      </div>
      <div className="modal5_form-material2">
        <span className="bold">Выбор курса</span>
        <img src={Oval} className="discipline-dot" alt="" />
        <span className="modal5_form-grey">Ввод названия курса</span>
      </div>
      <div className="materialtxt-textarea">
        <textarea
          name="materialtxt"
          id="materialtxt"
          placeholder="Ввод названия курса"
          value={values.materialtxt}
          onChange={value => setFieldValue('materialtxt', value)}
          onBlur={handleBlur}
          error={errors.materialtxt && touched.materialtxt && (<span>{errors.materialtxt}</span>)}
          disabled={isSubmitting}
        />
      </div>
      <div className="text-center material-button">
        <Button className="button button_upload">Загрузить</Button>
      </div>
    </form>
  );
}
