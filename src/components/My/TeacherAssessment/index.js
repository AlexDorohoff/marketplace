import React, { useState } from 'react';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import PicSort from '../../../theme/images/account/pic-sort.svg';
import Oval from '../../../theme/images/oval.svg';
import Pencil1 from '../../../theme/images/account/pencil1.svg';
import PicChecked from '../../../theme/images/account/pic-checked.svg';
import CheckedPopup from '../../Common/CheckedPopup';
import './styles.scss';
import TeacherReportEdit from '../TeacherReportEdit';

/**
 * Teacher Assessment
 */
export default function Index() {

  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {!isEdit && (
      <div className="teacherassessment-block">
        <GridRow className="teacherassessment-block-title">
          <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
            <h3>Оценка заданий</h3>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
            <div className="teacherassessment-block-currentdate">
              Суббота 9 июня 2019 г.
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }} className="form-field">
            <div className="teacherassessment-block-about">
              <div className="teacherassessment-block-lname">
                Мамиашвили Зураб
              </div>
              <div className="teacherassessment-block-subject">
                Литература
                <img className="" src={Oval} alt="" />
              </div>
            </div>
            <div className="teacherassessment-block-lesson">
              <div className="teacherassessment-block-lesson-theme">
                Тема
              </div>
              <div className="teacherassessment-block-lesson-theme1">
                Поэты “ серебряного” века. <img className="" src={Oval} alt="" />
              </div>
            </div>
          </GridCol>
          <GridCol width={{ mobile: 11, tablet: 6, desktop: 6 }} className="form-field">
            <div className="teacherassessment-block-grade">
              <div className="teacherassessment-block-grade1">
                Средняя оценка
              </div>
              <div className="teacherassessment-block-grade2">
                4,67
              </div>
            </div>
          </GridCol>
        </GridRow>
        <div className="table-responsive">
          <table className="teacherassessment-block-table">
            <tbody>
              <tr className="teacherassessment-block-table-head">
                <td className="teacherassessment-block-table-theme">
                  Задание
                </td>
                <td className="teacherassessment-block-table-date">
                  Задано
                  <Link pseudo><img className="teacherassessment-block-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td className="teacherassessment-block-table-date">
                  Срок до
                  <Link pseudo><img className="teacherassessment-block-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td className="teacherassessment-block-table-date">
                  Сдано
                  <Link pseudo><img className="teacherassessment-block-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td className="teacherassessment-block-table-value">Оценка
                  <Link pseudo><img className="teacherassessment-block-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td>Комментарий</td>
              </tr>
              <tr>
                <td className="teacherassessment-block-table-author">
                  Эссе по произведению “Разговор с
                  солнцем” Владимира Маяковского
                </td>
                <td>
                  29-08-2019
                </td>
                <td>
                  01-09-2019
                </td>
                <td className="teacherassessment-block-table-delivered">
                  30-08-2019
                </td>
                <td className="teacherassessment-block-table-grade">
                  4
                </td>
                <td className="teacherassessment-block-table-edit">
                  {/*<Link pseudo><img className="" src={PicChecked} alt="" /></Link>*/}
                  <CheckedPopup message="«Муза» (цикл «Тайны ремесла»).Ахматова продолжает пушкинские традиции. Творчество максимально приближено к жизни и проистекает из нее.Поэтическое творчество воспринимается как нелегкий труд." />
                  <Link pseudo onClick={() => setIsEdit(true)}><img className="" src={Pencil1} alt="" /></Link>
                </td>
              </tr>
              <tr>
                <td className="teacherassessment-block-table-author">
                  Презентация “Творчество Сергея Есенина”
                </td>
                <td>
                  16-08-2019
                </td>
                <td>
                  19-08-2019
                </td>
                <td className="teacherassessment-block-table-delivered">
                  17-08-2019
                </td>
                <td className="teacherassessment-block-table-grade">
                  5
                </td>
                <td className="teacherassessment-block-table-edit">
                  {/*<Link pseudo><img className="" src={PicChecked} alt="" /></Link>*/}
                  <CheckedPopup message="«Муза» (цикл «Тайны ремесла»).Ахматова продолжает пушкинские традиции. Творчество максимально приближено к жизни и проистекает из нее.Поэтическое творчество воспринимается как нелегкий труд." />
                  <Link pseudo onClick={() => setIsEdit(true)}><img className="" src={Pencil1} alt="" /></Link>
                </td>
              </tr>
              <tr>
                <td className="teacherassessment-block-table-author">
                  “А. Ахматова. Жизнь, творчество, особенности лирики.”
                </td>
                <td>
                  29-08-2019
                </td>
                <td>
                  01-09-2019
                </td>
                <td className="teacherassessment-block-table-delivered">
                  30-08-2019
                </td>
                <td className="teacherassessment-block-table-grade">
                  4
                </td>
                <td className="teacherassessment-block-table-edit">
                  {/*<Link pseudo><img className="" src={PicChecked} alt="" /></Link>*/}
                  <CheckedPopup message="«Муза» (цикл «Тайны ремесла»).Ахматова продолжает пушкинские традиции. Творчество максимально приближено к жизни и проистекает из нее.Поэтическое творчество воспринимается как нелегкий труд." />
                  <Link pseudo onClick={() => setIsEdit(true)}><img className="" src={Pencil1} alt="" /></Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )}
    {isEdit && <TeacherReportEdit onReturn={() => setIsEdit()}/>}
    </>
  );
}
