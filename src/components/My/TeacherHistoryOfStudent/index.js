import React, { useState } from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import PicSort from '../../../theme/images/account/pic-sort.svg';
import PicRing from '../../../theme/images/account/pic-ring.svg';
import PicRing1 from '../../../theme/images/account/pic-ring1.svg';
import PicChecked from '../../../theme/images/account/pic-checked.svg';
import PicCalendar from '../../../theme/images/account/pic-calendar.svg';
import TeacherReport from '../TeacherReport';
import TeacherAssessment from '../TeacherAssessment';
import SelectPopup from '../../Common/SelectPopup';
import GridCol from 'arui-feather/grid-col';
import GridRow from 'arui-feather/grid-row';

const competentTypes = [
  { type: 'competent', name: 'Компетентен'},
  { type: 'sufficient_knowledge', name: 'Достаточные знания'},
  { type: 'not_competent_yet', name: 'Еще не компетентен'},
  { type: 'not_competent', name: 'Не компетентен'},
  { type: 'no_rating', name: 'Без оценки'},
];

/**
 * Teacher history of student
 */
export default function TeacherHistoryOfStudentForm() {
  const [idTeacherReport, setIdTeacherReport] = useState(0);
  const [idTeacherAssessment, setIdTeacherAssessment] = useState(0);

  const handleSetIdTeacherAssessment = () => {
    setIdTeacherReport(0);
    setIdTeacherAssessment(1);
  };

  const handleSetIdTeacherReport = () => {
    setIdTeacherReport(1);
    setIdTeacherAssessment(0);
  };

  return (
    <div className="teacherhistorystudent-block">
      <GridRow className="teacherhistorystudent-block-title">
        <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
          <h3>История занятий учащегося</h3>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
          <div className="teacherhistorystudent-block-currentdate">
            Суббота 9 июня 2019 г.
          </div>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
          <div className="teacherhistorystudent-block-name">
            Мамиашвили Зураб<br />
            <div className="teacherhistorystudent-block-ring">
              Не проверено <img className="" src={PicRing} alt="" /> 1
            </div>
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
          <div className="teacherhistorystudent-block-amount">
            ВСЕГО занятий <span>12</span>
            <div className="teacherhistorystudent-block-date">
              Дата
              <Link pseudo><img className="" src={PicCalendar} alt="" /></Link>
            </div>
          </div>
        </GridCol>
      </GridRow>

      <div className="table-responsive">
        <table className="teacherhistorystudent-block-table">
          <tbody>
            <tr className="teacherhistorystudent-block-table-head">
              <td className="teacherhistorystudent-block-table-theme">
                  Тема курса
              </td>
              <td className="teacherhistorystudent-block-table-subject">
                  Предмет
                <Link pseudo><img className="" src={PicSort} alt="" /></Link>
              </td>
              <td>Занятий</td>
              <td>Оценка</td>
              <td>Компетенция</td>
            </tr>
            <tr>
              <td className="teacherhistorystudent-block-table-checked">
                <div className="teacherhistorystudent-block-table-check1">Поэты “серебряного” века</div>
                <div className="teacherhistorystudent-block-table-check2">
                  <Link pseudo onClick={() => handleSetIdTeacherReport(1)}><img className="" src={PicChecked} alt="" /></Link>
                </div>
              </td>
              <td>
                Литература
              </td>
              <td>
                3
              </td>
              <td className="teacherhistorystudent-block-table-grade">
                <Link pseudo onClick={() => handleSetIdTeacherAssessment(1)}>4,67</Link>
              </td>
              <td className="teacherhistorystudent-block-table-competent">
                <SelectPopup onChange={(value) => {}} value="competent" options={competentTypes} />
              </td>
            </tr>
            <tr>
              <td className="teacherhistorystudent-block-table-checked">
                <div className="teacherhistorystudent-block-table-check1">Слабые позиции согласных.</div>
                <div className="teacherhistorystudent-block-table-check2">
                  <Link pseudo onClick={() => handleSetIdTeacherReport(1)}><img className="" src={PicChecked} alt="" /></Link>
                </div>
              </td>
              <td>
                Русский Язык
              </td>
              <td>
                3
              </td>
              <td className="teacherhistorystudent-block-table-grade">
                <Link pseudo onClick={() => handleSetIdTeacherAssessment(1)}>4,67</Link>
              </td>
              <td className="teacherhistorystudent-block-table-competent">
                <SelectPopup onChange={(value) => {}} value="competent" options={competentTypes} />
              </td>
            </tr>
            <tr>
              <td className="teacherhistorystudent-block-table-checked">
                <div className="teacherhistorystudent-block-table-check1">Согласные шипящие звуки [ж], [ш] (непарные твёрдые).</div>
                <div className="teacherhistorystudent-block-table-check2">
                  <Link pseudo onClick={() => handleSetIdTeacherReport(1)}><img className="" src={PicChecked} alt="" /></Link>
                </div>
              </td>
              <td>
                Русский Язык
              </td>
              <td>
                3
              </td>
              <td className="teacherhistorystudent-block-table-grade">
                <Link pseudo onClick={() => handleSetIdTeacherAssessment(1)}>4,67</Link>
              </td>
              <td className="teacherhistorystudent-block-table-competent">
                <SelectPopup onChange={(value) => {}} value="competent" options={competentTypes} />
              </td>
            </tr>
            <tr>
              <td className="teacherhistorystudent-block-table-checked">
                <div className="teacherhistorystudent-block-table-check1">Согласные шипящие звуки [ж], [ш] (непарные твёрдые).</div>
                <div className="teacherhistorystudent-block-table-check2">
                  <Link pseudo><img className="" src={PicRing} alt="" /></Link>
                </div>
              </td>
              <td>
                Русский Язык
              </td>
              <td>
                3
              </td>
              <td className="teacherhistorystudent-block-table-grade">
                <Link pseudo onClick={() => handleSetIdTeacherAssessment(1)}>4,67</Link>
              </td>
              <td className="teacherhistorystudent-block-table-competent">
                <SelectPopup onChange={(value) => {}} value="competent" options={competentTypes} />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      {!!idTeacherReport && <TeacherReport />}
      {!!idTeacherAssessment && <TeacherAssessment />}
    </div>
  );
}
