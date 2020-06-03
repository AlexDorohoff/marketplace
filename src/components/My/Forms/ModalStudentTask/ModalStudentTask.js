import React from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';
import PicSort from '../../../../theme/images/account/pic-sort.svg';
import ImgChat2 from '../../../../theme/images/account/img-chat2.svg';
import PicEye from '../../../../theme/images/account/pic-eye.svg';


/**
 * Teacher task form
 */
export default function StudentTaskForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="studenttask-modal">

        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
            <h2 className="studenttask-h2">
              Выданные задания
            </h2>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
            <div className="studenttask-modal-date">
              Суббота 9 июня 2019 г.
            </div>
          </GridCol>
        </GridRow>

        <div className="studenttask-modal-lesson">
          <div className="studenttask-modal-lesson-theme">
            Студент
          </div>
          <div className="studenttask-modal-lesson-theme1">
            Мамиашвили Зураб
          </div>
        </div>

        <div className="studenttask-modal-task-list">
          Список заданий
        </div>
        <div className="table-responsive">
          <table className="studenttask-modal-table">
            <tbody>
            <tr className="studenttask-modal-table-head">
              <td className="studenttask-modal-table-lname">
                Фамилия
                <Link pseudo><img className="" src={PicSort} alt="" /></Link>
                Имя
              </td>
              <td className="studenttask-modal-table-date">
                Тема курса
              </td>
              <td className="studenttask-modal-table-date">
                Просмотр
              </td>
            </tr>
            <tr>
              <td className="studenttask-modal-table-picname">
                <img className="studenttask-modal-table-pic" src={ImgChat2} alt="" />
                Барышева
                Светлана Валентиновна
              </td>
              <td>
                Поэты “серебряного” века. Владимир Маяковский
              </td>
              <td className="studenttask-modal-table-date">
                <img className="" src={PicEye} alt="" />
              </td>
            </tr>
            <tr>
              <td className="studenttask-modal-table-picname">
                <img className="studenttask-modal-table-pic" src={ImgChat2} alt="" />
                Солдатов Михаил Юрьевич
              </td>
              <td>
                Неправильные английские глаголы.
              </td>
              <td className="studenttask-modal-table-date">
                <img className="" src={PicEye} alt="" />
              </td>
            </tr>
            <tr>
              <td className="studenttask-modal-table-picname">
                <img className="studenttask-modal-table-pic" src={ImgChat2} alt="" />
                Иванова Нина Ивановна
              </td>
              <td>
                Процесс строения и деления клетки
              </td>
              <td className="studenttask-modal-table-date">
                <img className="" src={PicEye} alt="" />
              </td>
            </tr>

            </tbody>
          </table>
        </div>

      </div>
    </form>
  );
}
