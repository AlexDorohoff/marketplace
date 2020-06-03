import React from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import PicSort from '../../../../theme/images/account/pic-sort.svg';
import Pencil1 from '../../../../theme/images/account/pencil1.svg';
import PicChecked from '../../../../theme/images/account/pic-checked.svg';
import ImgChat4 from '../../../../theme/images/account/img-chat4.svg';

/**
 * Student Assessment form
 */
export default function ModalStudentAssessmentForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="studentassessment-modal">
        <div className="studenthistory-modal-date">
          Суббота 9 июня 2019 г.
        </div>
        <div className="studenthistory-modal-header">
          <div className="studenthistory-modal-header-theme">
            Студент
          </div>
          <div className="studenthistory-modal-header-theme1">
            Мамиашвили Зураб
          </div>
        </div>
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

        <div className="table-responsive">
          <table className="studentassessment-modal-table">
            <tbody>
              <tr className="studentassessment-modal-table-head">
                <td className="studentassessment-modal-table-theme">
                  Задание
                </td>
                <td className="studentassessment-modal-table-date">
                  Задано
                  <Link pseudo><img className="studentassessment-modal-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td className="studentassessment-modal-table-date">
                  Срок до
                  <Link pseudo><img className="studentassessment-modal-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td className="studentassessment-modal-table-date">
                  Сдано
                  <Link pseudo><img className="studentassessment-modal-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td className="studentassessment-modal-table-value">
Оценка
                  <Link pseudo><img className="studentassessment-modal-table-picsort" src={PicSort} alt="" /></Link>
                </td>
                <td className="studentassessment-modal-table-comment">
Комментарий преподавателя
                </td>
              </tr>
              <tr>
                <td className="studentassessment-modal-table-author">
                  Эссе по произведению “Разговор с солнцем” Владимира Маяковского
                </td>
                <td>
                  29-08-2019
                </td>
                <td>
                  01-09-2019
                </td>
                <td className="studentassessment-modal-table-delivered">
                  30-08-2019
                </td>
                <td className="studentassessment-modal-table-grade">
                  4
                </td>
                <td className="studentassessment-modal-table-edit">
                  <div className="studentassessment-modal-table-comment1">
                    <div className="studentassessment-modal-table-comment3">
                      <img className="studentassessment-modal-table-pic" src={ImgChat4} alt="" />
                    </div>
                    <div className="studentassessment-modal-table-comment4">
                    Барышева
                    С.В.
                    </div>
                  </div>
                  <div className="studentassessment-modal-table-comment2">
                    <Link pseudo><img className="" src={PicChecked} alt="" /></Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="studentassessment-modal-table-author">
                  Презентация “Творчество Сергея Есенина”
                </td>
                <td>
                  16-08-2019
                </td>
                <td>
                  19-08-2019
                </td>
                <td className="studentassessment-modal-table-delivered">
                  17-08-2019
                </td>
                <td className="studentassessment-modal-table-grade">
                  5
                </td>
                <td className="studentassessment-modal-table-edit">
                  <div className="studentassessment-modal-table-comment1">
                    <div className="studentassessment-modal-table-comment3">
                      <img className="studentassessment-modal-table-pic" src={ImgChat4} alt="" />
                    </div>
                    <div className="studentassessment-modal-table-comment4">
                      Барышева
                      С.В.
                    </div>
                  </div>
                  <div className="studentassessment-modal-table-comment2">
                    <Link pseudo><img className="" src={PicChecked} alt="" /></Link>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="studentassessment-modal-table-author">
                  “А. Ахматова. Жизнь, творчество, особенности лирики.”
                </td>
                <td>
                  29-08-2019
                </td>
                <td>
                  01-09-2019
                </td>
                <td className="studentassessment-modal-table-delivered">
                  30-08-2019
                </td>
                <td className="studentassessment-modal-table-grade">
                  4
                </td>
                <td className="studentassessment-modal-table-edit">
                  <div className="studentassessment-modal-table-comment1">
                    <div className="studentassessment-modal-table-comment3">
                      <img className="studentassessment-modal-table-pic" src={ImgChat4} alt="" />
                    </div>
                    <div className="studentassessment-modal-table-comment4">
                      Барышева
                      С.В.
                    </div>
                  </div>
                  <div className="studentassessment-modal-table-comment2">
                    <Link pseudo><img className="" src={PicChecked} alt="" /></Link>
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
