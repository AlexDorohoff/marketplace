import React from 'react';
import Link from 'arui-feather/link';
import PicSort from '../../../theme/images/account/pic-sort.svg';
import PicSort2 from '../../../theme/images/account/pic-sort2.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
import PicPlus2 from '../../../theme/images/account/pic-plus2.svg';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import PicCalendar from '../../../theme/images/account/pic-calendar.svg';
import './styles.scss';

/**
 * Teacher students assignments
 */
export default function TeacherStudentsAssignments() {
  return (
    <div className="teachertask-block">

      <GridRow className="teachertask-block-title">
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
          <h3>Задания</h3>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
          <div className="teacherhistory-block-currentdate">
            Суббота 9 июня 2019 г.
          </div>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
          <div className="teachertask-block-task-list">
            Список заданий учащихся
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
          <div className="teachertask-block-task-wrap">
            <div className="teachertask-block-task">
              Ожидание задания
            </div>
            <div className="teachertask-block-task1">
              3 <Link pseudo><img className="" src={PicSort2} alt="" /></Link>
            </div>
          </div>
        </GridCol>
      </GridRow>

      <div className="table-responsive">
        <table className="teachertask-block-table">
          <tbody>
          <tr className="teachertask-block-table-head">
            <td className="teachertask-block-table-lname">
              Фамилия
              <Link pseudo><img className="" src={PicSort} alt="" /></Link>
              Имя
            </td>
            <td className="teachertask-block-table-date">
              Задание
            </td>
            <td className="teachertask-block-table-date">
              Дата
              <Link pseudo><img className="" src={PicSort} alt="" /></Link>
            </td>
          </tr>
          <tr>
            <td className="teachertask-block-table-picname">
              <img className="teachertask-block-table-pic" src={ImgChat2} alt="" />
              Мухамедгалиева Ильмира
            </td>
            <td>
              Мягкий знак и гласные после шипящих и Ц
            </td>
            <td className="teachertask-block-table-date">
              05-06-2019
            </td>
          </tr>
          <tr>
            <td className="teachertask-block-table-picname">
              <img className="teachertask-block-table-pic" src={ImgChat2} alt="" />
              Мамиашвили Зураб
            </td>
            <td>
              Поэты “серебрянного” века
            </td>
            <td className="teachertask-block-table-date">
              01-06-2019
            </td>
          </tr>
          <tr>
            <td className="teachertask-block-table-picname">
              <img className="teachertask-block-table-pic" src={ImgChat2} alt="" />
              Минаков Кирилл
            </td>
            <td>
              Александр Сергеевич Пушкин — Солнце русской поэзии
            </td>
            <td className="teachertask-block-table-date">
              29-05-2019
            </td>
          </tr>
          <tr>
            <td className="teachertask-block-table-picname">
              <img className="teachertask-block-table-pic" src={ImgChat2} alt="" />
              Атанаев Вася
            </td>
            <td className="shaded-td">
              Ожидание задания
            </td>
            <td className="teachertask-block-table-date">
              <Link pseudo><img className="" src={PicPlus2} alt="" /></Link>
            </td>
          </tr>
          <tr>
            <td className="teachertask-block-table-picname">
              <img className="teachertask-block-table-pic" src={ImgChat2} alt="" />
              Мамиашвили Зураб
            </td>
            <td>
              Слабые позиции согласных.
            </td>
            <td className="teachertask-block-table-date">
              29-05-2019
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
