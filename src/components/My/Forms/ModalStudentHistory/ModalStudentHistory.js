import React, { useState } from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import PicSort from '../../../../theme/images/account/pic-sort.svg';
import PicClose from '../../../../theme/images/account/pic-close.svg';
import ImgChat2 from '../../../../theme/images/account/img-chat2.svg';
import PicEye from '../../../../theme/images/account/pic-eye.svg';
import PicRating5 from '../../../../theme/images/account/pic-rating5.svg';
import PicStar3 from '../../../../theme/images/account/pic-star3.svg';
import Dialog from '../../../Common/Dialog';
import ModalStudentHistoryTheme from '../ModalStudentHistoryTheme';

/**
 * Student history form
 */
export default function StudentHistoryForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  const [idOpenModal, setIdOpenModal] = useState('');
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="studenthistory-modal">
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

        <div className="studenthistory-modal-title">
          Занятия и курсы учащегося
        </div>
        <div className="table-responsive">
          <table className="studenthistory-modal-table">
            <tbody>
              <tr className="studenthistory-modal-table-head">
                <td className="studenthistory-modal-table-lname">
Фамилия
                  <Link pseudo><img className="" src={PicSort} alt="" /></Link>
Имя
                </td>
                <td>История тем</td>
                <td>Всего занятий</td>
                <td>Всего курсов</td>
                <td>Средний балл</td>
                <td className="studenthistory-modal-table-success">Предмет</td>
                <td className="studenthistory-modal-table-rating">Рейтинг</td>
              </tr>
              <tr>
                <td className="studenthistory-modal-table-picname">
                  <img className="studenthistory-modal-table-pic" src={ImgChat2} alt="" />
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}>Иванова Нина Ивановна</Link>
                </td>
                <td>
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}><img src={PicEye} className="studenthistory-modal-table-pencil" alt="" /></Link>
                </td>
                <td />
                <td />
                <td />
                <td>
Биология
                </td>
                <td className="studenthistory-modal-table-rating" />
              </tr>
              <tr>
                <td className="studenthistory-modal-table-picname">
                  <img className="studenthistory-modal-table-pic" src={ImgChat2} alt="" />
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}>Жандарский Владимир Иванович</Link>
                </td>
                <td>
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}><img src={PicEye} className="studenthistory-modal-table-pencil" alt="" /></Link>
                </td>
                <td />
                <td />
                <td />
                <td>
Алгебра
                </td>
                <td className="studenthistory-modal-table-rating" />
              </tr>
              <tr>
                <td className="studenthistory-modal-table-picname">
                  <img className="studenthistory-modal-table-pic" src={ImgChat2} alt="" />
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}>Солдатов Михаил Юрьевич</Link>
                </td>
                <td>
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}><img src={PicEye} className="studenthistory-modal-table-pencil" alt="" /></Link>
                </td>
                <td />
                <td />
                <td />
                <td>
Английский язык
                </td>
                <td className="studenthistory-modal-table-rating" />
              </tr>
              <tr>
                <td className="studenthistory-modal-table-picname">
                  <img className="studenthistory-modal-table-pic" src={ImgChat2} alt="" />
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}>Розов Роман Михайлович</Link>
                </td>
                <td>
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}><img src={PicEye} className="studenthistory-modal-table-pencil" alt="" /></Link>
                </td>
                <td />
                <td />
                <td />
                <td>
Физика
                </td>
                <td className="studenthistory-modal-table-rating" />
              </tr>
              <tr>
                <td className="studenthistory-modal-table-picname">
                  <img className="studenthistory-modal-table-pic" src={ImgChat2} alt="" />
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}>Барышева Светлана Валентиновна</Link>
                </td>
                <td>
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}><img src={PicEye} className="studenthistory-modal-table-pencil" alt="" /></Link>
                </td>
                <td>12</td>
                <td>
                  <Link pseudo><img src={PicClose} alt="" /></Link>
                </td>
                <td>4,67</td>
                <td>
Русский язык
                </td>
                <td className="studenthistory-modal-table-rating">
                  <Link pseudo><img src={PicRating5} alt="" /></Link>
                </td>
              </tr>
              <tr>
                <td className="studenthistory-modal-table-picname">
                  <img className="studenthistory-modal-table-pic" src={ImgChat2} alt="" />
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}>Барышева Светлана Валентиновна</Link>
                </td>
                <td>
                  <Link pseudo onClick={() => setIdOpenModal('StudentHistoryTheme')}><img src={PicEye} className="studenthistory-modal-table-pencil" alt="" /></Link>
                </td>
                <td>
                  <Link pseudo><img src={PicClose} alt="" /></Link>
                </td>
                <td>3</td>
                <td>
                      4,83
                </td>
                <td>
Литература
                </td>
                <td className="studenthistory-modal-table-rating">
                  <Link pseudo><img src={PicStar3} alt="" /></Link>
                  <div className="studenthistory-modal-table-ratingblock">
                          4,83
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Dialog isOpen={idOpenModal === 'StudentHistoryTheme'} onClose={() => setIdOpenModal('')} title="История тем">
          <ModalStudentHistoryTheme />
        </Dialog>

      </div>
    </form>
  );
}
