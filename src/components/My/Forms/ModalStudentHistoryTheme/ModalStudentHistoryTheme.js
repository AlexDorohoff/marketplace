import React, { useState } from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import PicSort from '../../../../theme/images/account/pic-sort.svg';
import PicEye from '../../../../theme/images/account/pic-eye.svg';
import PicRing from '../../../../theme/images/account/pic-ring.svg';
import PicRing1 from '../../../../theme/images/account/pic-ring1.svg';
import PicClose from '../../../../theme/images/account/pic-close.svg';
import PicCalendar from '../../../../theme/images/account/pic-calendar.svg';
import Dialog from '../../../Common/Dialog';
import ModalStudentReport from '../ModalStudentReport';
import ModalStudentAssessment from '../ModalStudentAssessment';
// import ModalTeacherReport from "../../TeacherReport";
// import ModalTeacherAssessment from "../../TeacherAssessment";

/**
 * Student history of themes form
 */
export default function StudentHistoryThemeForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  const [idOpenModal, setIdOpenModal] = useState('');
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="studenthistorytheme-modal">

        <div className="studenthistorytheme-modal-date">
          Суббота 9 июня 2019 г.
        </div>

        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
            <div className="studenthistorytheme-modal-header">
              <div className="studenthistorytheme-modal-header-theme">
                Преподаватель
              </div>
              <div className="studenthistorytheme-modal-header-theme1">
                Барышева Светлана Валентиновна
              </div>
            </div>

          </GridCol>
          <GridCol width={{ mobile: 0, tablet: 1, desktop: 1 }} />
          <GridCol width={{ mobile: 6, tablet: 3, desktop: 3 }}>
            <div className="studenthistorytheme-modal-amount">
              ВСЕГО занятий
              <span>12</span>
            </div>
            <div className="studenthistorytheme-modal-ring">
                Не проверено
              <img className="" src={PicRing} alt="" />
1
            </div>
          </GridCol>
          <GridCol width={{ mobile: 6, tablet: 2, desktop: 2 }}>
            <div className="studenthistorytheme-modal-date">
              Дата
              <Link pseudo><img className="" src={PicCalendar} alt="" /></Link>
            </div>
          </GridCol>
        </GridRow>

        <div className="table-responsive">
          <table className="studenthistorytheme-modal-table">
            <tbody>
              <tr className="studenthistorytheme-modal-table-head">
                <td className="studenthistorytheme-modal-table-theme">
                    Тема курса
                </td>
                <td className="studenthistorytheme-modal-table-subject">
                    Предмет
                  <Link pseudo><img className="" src={PicSort} alt="" /></Link>
                </td>
                <td>Занятий</td>
                <td>Оценка</td>
                <td>Компетенция</td>
              </tr>
              <tr>
                <td className="studenthistorytheme-modal-table-checked">
                  <div className="studenthistorytheme-modal-table-check1">Поэты “серебряного” века</div>
                  <div className="studenthistorytheme-modal-table-check2">
                    <Link pseudo onClick={() => setIdOpenModal('StudentReport')}><img className="" src={PicEye} alt="" /></Link>
                  </div>
                </td>
                <td>
                  Литература
                </td>
                <td>
                  3
                </td>
                <td className="teacherhistorystudent-modal-table-grade">
                  <Link pseudo onClick={() => setIdOpenModal('StudentAssessment')}>4,67</Link>
                </td>
                <td className="studenthistorytheme-modal-table-competent">
                  Компетентен
                </td>
              </tr>
              <tr>
                <td className="studenthistorytheme-modal-table-checked">
                  <div className="studenthistorytheme-modal-table-check1">“Золотой век” русской поэзии</div>
                  <div className="studenthistorytheme-modal-table-check2">
                    <Link pseudo onClick={() => setIdOpenModal('StudentReport')}><img className="" src={PicRing1} alt="" /></Link>
                  </div>
                </td>
                <td>
                  Русский Язык
                </td>
                <td>
                  3
                </td>
                <td className="teacherhistorystudent-modal-table-grade">
                  <Link pseudo onClick={() => setIdOpenModal('StudentAssessment')}>4,67</Link>
                </td>
                <td className="studenthistorytheme-modal-table-competent">
                  <Link pseudo><img className="" src={PicClose} alt="" /></Link>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <Dialog isOpen={idOpenModal === 'StudentReport'} onClose={() => setIdOpenModal('')} title="Отчет по пройденной теме">
          <ModalStudentReport />
        </Dialog>
        <Dialog isOpen={idOpenModal === 'StudentAssessment'} onClose={() => setIdOpenModal('')} title="Оценка заданий">
          <ModalStudentAssessment />
        </Dialog>

      </div>
    </form>
  );
}
