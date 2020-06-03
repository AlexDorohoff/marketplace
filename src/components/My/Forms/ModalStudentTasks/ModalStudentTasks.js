import React from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import Oval from '../../../../theme/images/oval.svg';

/**
 * Teacher tasks form
 */
export default function StudentTasksForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="studenttasks-modal">
        <div className="studenthistory-modal-date">
          Суббота 9 июня 2019 г.
        </div>

        <div className="studenttasks-modal-about">
          <div className="studenttasks-modal-lname">
            Мамиашвили Зураб
          </div>
          <div className="studenttasks-modal-subject">
            Литература
            <img className="" src={Oval} alt="" />
          </div>
        </div>
        <div className="studenttasks-modal-lesson">
          <div className="studenttasks-modal-lesson-theme">
            Тема
          </div>
          <div className="studenttasks-modal-lesson-theme1">
            Поэты “ серебряного” века.
          </div>
          <div className="studenttasks-modal-lesson-theme2">
            Владимир Маяковский
          </div>
        </div>

        <div className="table-responsive">
          <table className="studenttasks-modal-table">
            <tbody>
            <tr className="studenttasks-modal-table-head">
              <td className="studenttasks-modal-table-theme">
                Задание
              </td>
              <td className="studenttasks-modal-table-date">
                Срок до
              </td>
            </tr>
            <tr>
              <td className="studenttasks-modal-table-author">
                Эссе по произведению “Разговор с солнцем” Владимира Маяковского
              </td>
              <td>
                01-09-2019
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="studenttasks-modal-explanation">
          Пояснение преподавателя
        </div>
        <div className="studenttasks-modal-explanation1">
          Что мы знаем об истории создания стихотворения ««Необычайное приключение, бывшее с Владимиром Маяковским
          летом на даче»?
        </div>
        <div className="studenttasks-modal-more">
          <Link pseudo>Подробнее ...</Link>
        </div>

      </div>
    </form>
  );
}
