import React from 'react';
import './styles.scss';
import GridCol from 'arui-feather/grid-col';
import Input from 'arui-feather/input';
import GridRow from 'arui-feather/grid-row';
import Button from 'arui-feather/button';

/**
 * Modal6 form
 */
export default function StudentForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="modal6_form">
      <div className="modal4_form-subhead">Ввод дисциплины</div>
      <div className="discipline-textarea">
        <textarea
          name="discipline"
          id="discipline"
          placeholder="Гео"
          value={values.discipline}
          onChange={value => setFieldValue('discipline', value)}
          onBlur={handleBlur}
          error={errors.discipline && touched.discipline && (<span>{errors.discipline}</span>)}
          disabled={isSubmitting}
        />
      </div>
      <div className="modal4_form-subhead">Заголовок</div>
      <div className="modal4_form-titlediscipl">
        <Input
          name="titlediscipl"
          id="titlediscipl"
          placeholder="Введите заголовок дисциплины для отбражения в профиле на вашей странице"
          value={values.titlediscipl}
          onChange={value => setFieldValue('titlediscipl', value)}
          onBlur={handleBlur}
          width="available"
          error={errors.titlediscipl && touched.titlediscipl && (<span>{errors.titlediscipl}</span>)}
          disabled={isSubmitting}
        />
      </div>

      <div className="modal4_form-subhead">Описание дисциплины</div>
      <div className="descrdiscipl-textarea">
        <textarea
          name="descrdiscipl"
          id="descrdiscipl"
          placeholder="Курс фокусируется на самых проблемных моментах в русской грамматике.
Курс учит не только грамотной письменной речи, но и устному языку. Слушатели разберут самые распространенные орфографические и пунктуационные ошибки: использование разных знаков препинания, написание суффиксов, сложных слов с частицами и предлогами-приставками, слитное и раздельное написание слов. "
          value={values.descrdiscipl}
          onChange={value => setFieldValue('descrdiscipl', value)}
          onBlur={handleBlur}
          error={errors.descrdiscipl && touched.descrdiscipl && (<span>{errors.descrdiscipl}</span>)}
          disabled={isSubmitting}
        />
      </div>
      <div className="modal4_form-subhead">Содержание курса</div>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              id="punctuation"
              placeholder="Знаки препинания"
              value={values.punctuation}
              onChange={value => setFieldValue('punctuation', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.punctuation && touched.punctuation && (<span>{errors.punctuation}</span>)}
              disabled={isSubmitting}
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              id="difficult"
              placeholder="Сложные слова"
              value={values.difficult}
              onChange={value => setFieldValue('difficult', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.difficult && touched.difficult && (<span>{errors.difficult}</span>)}
              disabled={isSubmitting}
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              id="suffix"
              placeholder="Суффиксы"
              value={values.suffix}
              onChange={value => setFieldValue('suffix', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.suffix && touched.suffix && (<span>{errors.suffix}</span>)}
              disabled={isSubmitting}
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              id="singleseparate"
              placeholder="Слитно / раздельно"
              value={values.singleseparate}
              onChange={value => setFieldValue('singleseparate', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.singleseparate && touched.singleseparate && (<span>{errors.singleseparate}</span>)}
              disabled={isSubmitting}
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              id="practice"
              placeholder="Практика"
              value={values.practice}
              onChange={value => setFieldValue('practice', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.practice && touched.practice && (<span>{errors.practice}</span>)}
              disabled={isSubmitting}
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              placeholder=" "
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              placeholder=" "
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              placeholder=" "
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              placeholder=" "
            />
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
          <div className="inputbox-dotted">
            <Input
              className="input-dotted"
              placeholder=" "
            />
          </div>
        </GridCol>
      </GridRow>
      <div className="discipl-endurance">
        <div className="modal4_form-subhead">Продолжительность</div>
        <Input
          className="input-dotted"
          id="dendurance"
          placeholder=""
          value={values.dendurance}
          onChange={value => setFieldValue('dendurance', value)}
          onBlur={handleBlur}
          width="available"
          error={errors.dendurance && touched.dendurance && (<span>{errors.dendurance}</span>)}
          disabled={isSubmitting}
        />
      </div>
      <div className="discipl-price">
        <div className="modal4_form-subhead">Стоимость</div>
        <Input
          className="input-dotted"
          id="dprice"
          placeholder=""
          value={values.dprice}
          onChange={value => setFieldValue('dprice', value)}
          onBlur={handleBlur}
          width="available"
          error={errors.dprice && touched.dprice && (<span>{errors.dprice}</span>)}
          disabled={isSubmitting}
        />
      </div>
      <div className="text-center discipline-button">
        <Button className="button button_modalblue">Загрузить</Button>
      </div>
    </form>
  );
}
