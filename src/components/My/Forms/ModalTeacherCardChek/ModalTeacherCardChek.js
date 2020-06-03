import React from 'react';
import Button from 'arui-feather/button';
import './styles.scss';
import PicRing2 from '../../../../theme/images/account/pic-ring2.svg';

/**
 * Teacher Card check form
 */
export default function TeacherCardCheckForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="teachercardcheck-modal">

        <div className="teachercardcheck-modal-check">
            Проверьте !
        </div>

        <div className="teachercardcheck-modal-wrap">

          <div className="teachercardcheck-modal-ring">
            <img src={PicRing2} alt="" />
          </div>

          <div className="teachercardcheck-modal-carddata">
            <div className="teachercardcheck-modal-card">
              <div className="teachercardcheck-modal-card-number">
          Номер карты
              </div>
              <div className="teachercardcheck-modal-card-number1">
          9999
              </div>
              <div className="teachercardcheck-modal-card-number1">
          9999
              </div>
              <div className="teachercardcheck-modal-card-number1">
          9999
              </div>
              <div className="teachercardcheck-modal-card-number1">
          9999
              </div>
            </div>
            <div className="teachercardcheck-modal-sum">
              <div className="teachercardcheck-modal-sum-sum1">
            Сумма к зачислению
              </div>
              <div className="teachercardcheck-modal-sum-sum2">
            15 000 ₽ <span>Единоразово может быть выведена сумма не более 15 000 ₽</span>
              </div>
            </div>
          </div>

        </div>

          <div className="teachercardcheck-modal-button">
                      <Button className="button button_settings-form">Отправить</Button>
                      <Button className="button button_settings-cancel">Отменить</Button>
          </div>


      </div>
    </form>
  );
}
