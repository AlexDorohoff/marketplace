import React from 'react';
import Button from 'arui-feather/button';
import './styles.scss';
import Oval from "../../../../theme/images/oval.svg";
import GridCol from "arui-feather/grid-col";

/**
 * Teacher Card form
 */
export default function TeacherCardForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="teachercard-modal">

        <div className="teachercard-modal-top">
          Вывод на карты российских банков
        </div>

        <div className="teachercard-modal-lesson">
          <div className="teachercard-modal-lesson-theme">
            Плательщик
          </div>
          <div className="teachercard-modal-lesson-theme1">
            Барышева Светлана Валентиновна
          </div>
        </div>


          <div className="teachercard-modal-card">
            <div className="teachercard-modal-card-number">
                                Номер карты
            </div>
            <div className="teachercard-modal-card-number1">
                                9999
            </div>
            <div className="teachercard-modal-card-number1">
                                9999
            </div>
            <div className="teachercard-modal-card-number1">
                                9999
            </div>
            <div className="teachercard-modal-card-number1">
                                9999
            </div>
          </div>
          <div className="teachercard-modal-sum">
            <div className="teachercard-modal-sum-sum1">
                                Сумма к зачислению
            </div>
            <div className="teachercard-modal-sum-sum2">
                                15 000 ₽ 
              {' '}
              <span>Единоразово может быть выведена сумма не более 15 000 ₽</span>
            </div>
          </div>


      </div>

      <div className="teachercard-modal-button">
        <Button className="button button_settings-form">Отправить</Button>
        <Button className="button button_settings-cancel">Отменить</Button>
      </div>


    </form>
  );
}
