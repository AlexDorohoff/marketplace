import React, { useState } from 'react';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import PicSort from '../../../theme/images/account/pic-sort.svg';
import PicPlus from '../../../theme/images/account/pic-plus.svg';
import Oval from '../../../theme/images/oval.svg';
import Pencil1 from '../../../theme/images/account/pencil1.svg';
import Dialog from '../../Common/Dialog';
import ModalTeacherTasks from '../Forms/ModalTeacherTasks';
import TeacherReportEdit from '../TeacherReportEdit';
import './styles.scss';

/**
 * Teacher report
 */
export default function TeacherReport() {

  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {!isEdit && (
        <div className="teacherreport-block">

          <GridRow className="teacherreport-block-title">
            <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
              <h3>Отчет по пройденной теме</h3>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
              <div className="teacherreport-block-currentdate">
                Суббота 9 июня 2019 г.
              </div>
            </GridCol>
          </GridRow>

          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
              <div className="teacherreport-block-about">
                <div className="teacherreport-block-lname">
                  Мамиашвили Зураб
                </div>
                <div className="teacherreport-block-subject">
                  Литература
                  <img className="" src={Oval} alt="" />
                </div>
              </div>
              <div className="teacherreport-block-lesson">
                <div className="teacherreport-block-lesson-theme">
                  Тема
                </div>
                <div className="teacherreport-block-lesson-theme1">
                  Поэты “ серебряного” века.
                </div>
              </div>
            </GridCol>
            <GridCol width={{ mobile: 11, tablet: 5, desktop: 5 }} className="form-field">
              <div className="teacherreport-block-grade">
                <div className="teacherreport-block-grade1">
                  Средняя оценка
                </div>
                <div className="teacherreport-block-grade2">
                  4,67
                </div>
              </div>
            </GridCol>
            <GridCol width={{ mobile: 1, tablet: 1, desktop: 1 }} className="form-field">
              <Link pseudo onClick={() => setIsEdit(!isEdit)}><img src={Pencil1} alt=""/></Link>
            </GridCol>
          </GridRow>

          <div className="table-responsive">
            <table className="teacherreport-block-table">
              <tbody>
                <tr className="teacherreport-block-table-head">
                  <td className="teacherreport-block-table-theme">
                    Тема урока
                  </td>
                  <td className="teacherreport-block-table-date">
                      Дата
                    <Link pseudo><img className="teacherreport-block-table-picsort" src={PicSort} alt="" /></Link>
                  </td>
                  <td>Занятие №</td>
                  <td className="teacherreport-block-table-value">Оценка
                    <Link pseudo><img className="teacherreport-block-table-picsort" src={PicSort} alt="" /></Link>
                  </td>
                  <td>Задание</td>
                </tr>
                <tr>
                  <td className="teacherreport-block-table-author">
                    Владимир Маяковский
                  </td>
                  <td>
                    29-08-2019
                  </td>
                  <td>
                    3
                  </td>
                  <td className="teacherreport-block-table-grade">
                    4
                  </td>
                  <td className="teacherreport-block-table-task">
                    Эссе на произведение “Разговор с солнцем”
                  </td>
                </tr>
                <tr>
                  <td className="teacherreport-block-table-author">
                    Сергей Есенин
                  </td>
                  <td>
                    16-08-2019
                  </td>
                  <td>
                    2
                  </td>
                  <td className="teacherreport-block-table-grade">
                    5
                  </td>
                  <td className="teacherreport-block-table-task">
                    <div className="teacherreport-block-table-taskimg">
                      <Link pseudo><img className="" src={PicPlus} alt="" /></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="teacherreport-block-table-author">
                    Анна Ахматова
                  </td>
                  <td>
                    12-08-2019
                  </td>
                  <td>
                    1
                  </td>
                  <td className="teacherreport-block-table-grade">
                    5
                  </td>
                  <td className="teacherreport-block-table-task">
                    <div className="teacherreport-block-table-taskimg">
                      <Link pseudo><img className="" src={PicPlus} alt="" /></Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isEdit && <TeacherReportEdit onReturn={() => setIsEdit(false)}/>}
    </>
  );
}
