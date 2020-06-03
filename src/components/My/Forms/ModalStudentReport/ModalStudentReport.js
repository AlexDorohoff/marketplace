import React from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import PicSort from '../../../../theme/images/account/pic-sort.svg';
import PicPlus from '../../../../theme/images/account/pic-plus.svg';
import PicEye from '../../../../theme/images/account/pic-eye.svg';

/**
 * Student report form
 */
export default function StudentReportForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="studentreport-modal">
        <div className="studentreport-modal-date">
          Суббота 9 июня 2019 г.
        </div>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field">
            <div className="studentreport-modal-lesson">
              <div className="studentreport-modal-lesson-theme">
                Студент
              </div>
              <div className="studentreport-modal-lesson-theme1">
                Мамиашвили Зураб
              </div>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} className="form-field">
            <div className="studentreport-modal-grade">
              <div className="studentreport-modal-grade1">
                Средняя оценка
              </div>
              <div className="studentreport-modal-grade2">
                4,67
              </div>
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 7, desktop: 7 }} className="form-field">
            <div className="studentassessment-modal-lesson">
              <div className="studentassessment-modal-lesson-theme">
                Литература
              </div>
              <div className="studentassessment-modal-lesson-theme0">
                Тема
              </div>
              <div className="studentassessment-modal-lesson-theme1">
                Поэты “ серебряного” века.
              </div>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }} className="form-field">
            <Link pseudo><img className="" src={PicEye} alt="" /></Link>
          </GridCol>
        </GridRow>
        <div className="table-responsive">
          <table className="studentreport-modal-table">
            <tbody>
              <tr className="studentreport-modal-table-head">
                <td className="studentreport-modal-table-theme">
                  Тема урока
                </td>
                <td className="studentreport-modal-table-date">
                    Дата
                  <Link pseudo><img className="studentreport-modal-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td>Занятие №</td>
                <td className="studentreport-modal-table-value">Оценка
                  <Link pseudo><img className="studentreport-modal-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td>Задание</td>
              </tr>
              <tr>
                <td className="studentreport-modal-table-author">
                  Владимир Маяковский
                </td>
                <td>
                  29-08-2019
                </td>
                <td>
                  3
                </td>
                <td className="studentreport-modal-table-grade">
                  4
                </td>
                <td className="studentreport-modal-table-task">
                  Эссе на произведение “Разговор с солнцем”
                </td>
              </tr>
              <tr>
                <td className="studentreport-modal-table-author">
                  Сергей Есенин
                </td>
                <td>
                  16-08-2019
                </td>
                <td>
                  2
                </td>
                <td className="studentreport-modal-table-grade">
                  5
                </td>
                <td className="studentreport-modal-table-task">
                  <div className="studentreport-modal-table-taskimg">

                  </div>
                </td>
              </tr>
              <tr>
                <td className="studentreport-modal-table-author">
                  Анна Ахматова
                </td>
                <td>
                  12-08-2019
                </td>
                <td>
                  1
                </td>
                <td className="studentreport-modal-table-grade">
                  5
                </td>
                <td className="studentreport-modal-table-task">
                  <div className="studentreport-modal-table-taskimg">
                                      </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </form>
  );
}
