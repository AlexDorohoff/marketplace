import React from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import PicPlus1 from '../../../../theme/images/account/pic-plus1.svg';
import Oval from '../../../../theme/images/oval.svg';
import Pencil1 from '../../../../theme/images/account/pencil1.svg';
import Button from 'arui-feather/button';

/**
 * Teacher tasks form
 */
export default function TeacherTasksForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="teachertasks-modal">
        <div className="teachertasks-modal-currentdate">
          Суббота 9 июня 2019 г.
        </div>
        <GridRow>
          <GridCol width={{ mobile: 10, tablet: 10, desktop: 10 }} className="form-field">
            <div className="teachertasks-modal-about">
              <div className="teachertasks-modal-lname">
                Мамиашвили Зураб
              </div>
              <div className="teachertasks-modal-subject">
                Литература
                <img className="" src={Oval} alt="" />
              </div>
            </div>
            <div className="teachertasks-modal-lesson">
              <div className="teachertasks-modal-lesson-theme">
                Тема
              </div>
              <div className="teachertasks-modal-lesson-theme1">
                Поэты “ серебряного” века.
              </div>
              <div className="teachertasks-modal-lesson-theme2">
                Владимир Маяковский
              </div>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }} className="form-field teachertasks-modal-lesson-edit">
            <Link pseudo><img src={Pencil1} alt=""/></Link>
            <Link pseudo><img src={PicPlus1} alt="" className="teachertasks-modal-picplus" /></Link>
          </GridCol>
        </GridRow>

        <div className="table-responsive">
          <table className="teachertasks-modal-table">
            <tbody>
            <tr className="teachertasks-modal-table-head">
              <td className="teachertasks-modal-table-theme">
                Задание
              </td>
              <td className="teachertasks-modal-table-date">
                Срок до
              </td>
            </tr>
            <tr>
              <td className="teachertasks-modal-table-author">
                Эссе по произведению “Разговор с солнцем” Владимира Маяковского
              </td>
              <td>
                01-09-2019
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="teachertasks-modal-explanation">
          Пояснение преподавателя
        </div>
        <div className="teachertasks-modal-explanation1">
          Пояснить, определить, найти
        </div>
        <div className="teachertasks-modal-more">
          <Link pseudo>Подробнее ...</Link>
        </div>
        <div className="text-center teachertasks-modal-button">
          <Button className="button button_settings-form">Переслать</Button>
        </div>

      </div>
    </form>
  );
}
