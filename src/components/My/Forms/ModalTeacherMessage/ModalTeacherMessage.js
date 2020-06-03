import React from 'react';
import Button from 'arui-feather/button';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import './styles.scss';
import ImgChat from '../../../../theme/images/account/img-chat1.svg';
import PicClip from '../../../../theme/images/account/pic-clip.svg';

/**
 * Teacher message form
 */
export default function TeacherMessageForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="teachermessage-modal">

        <div className="teachermessage-modal-about">
          <div className="teachermessage-modal-theme">
            Тема
          </div>
          <div className="teachermessage-modal-subject">
            О себе
          </div>
        </div>
        <GridRow>
          <GridCol width={{ mobile: 8, tablet: 8, desktop: 8 }}>
            <div className="teachermessage-modal-student-pic">
              <img className="" src={ImgChat} alt="" />
            </div>
            <div className="teachermessage-modal-student-title">
              Мухамедгалиева Ильмира
            </div>
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }}>
            <img className="" src={PicClip} alt="" />
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }}>
            <div className="teachermessage-modal-student-date">
              2019-08-25
              11:30:00
            </div>
          </GridCol>
        </GridRow>

        <div className="discipline-textarea">
          <textarea
            name="discipline"
            id="discipline"
            placeholder="Имею 20-летний опыт работы. Разработала собственную методологию, Являюсь автором нескольких научных статей.
Я не просто веду учеников по маршрутам учебных программ, а помогаю ребятам увидеть, почувствовать и сделать своим достоянием поразительное разнообразие мира нашей родной, русской речи."
            value={values.discipline}
            onChange={value => setFieldValue('discipline', value)}
            onBlur={handleBlur}
            error={errors.discipline && touched.discipline && (<span>{errors.discipline}</span>)}
            disabled={isSubmitting}
          />
        </div>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <div className="text-center teachermessage-modal-button">
              <Button className="button button_settings-form">Отправить</Button>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, table: 6, desktop: 6 }}>
            <div className="text-center teachermessage-modal-button">
              <Button className="button button_settings-cancel">Отменить</Button>
            </div>
          </GridCol>
        </GridRow>
      </div>
    </form>
  );
}
