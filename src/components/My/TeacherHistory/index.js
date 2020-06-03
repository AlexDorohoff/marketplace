import React, { useState } from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import PicSort from '../../../theme/images/account/pic-sort.svg';
import PicClose from '../../../theme/images/account/pic-close.svg';
import ImgChat2 from '../../../theme/images/account/img-chat2.svg';
import Pencil1 from '../../../theme/images/account/pencil1.svg';
import PicCalendar from '../../../theme/images/account/pic-calendar.svg';
import PicBanner from '../../../theme/images/account/pic-banner.svg';
import PicCake from '../../../theme/images/account/pic-cake.svg';
import PicHat from '../../../theme/images/account/pic-hat.svg';
import TeacherHistoryOfStudent from '../TeacherHistoryOfStudent';

/**
 * Teacher history
 */
export default function TeacherHistory() {
  const [idHistoryOfStudent, setIdHistoryOfStudent] = useState('');

  return (
    <div className="teacherhistory-block">
      <GridRow className="teacherhistory-block-title">
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
          <h3>История</h3>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 6, desktop: 6 }}>
          <div className="teacherhistory-block-currentdate">
            Суббота 9 июня 2019 г.
          </div>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol width={{ mobile: 12, tablet: 8, desktop: 8 }}>
          <div className="teacherhistory-block-name">
            Сводный отчет результатов учащихся
          </div>
        </GridCol>
        <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }}>
          <div className="teacherhistory-block-date">
            Дата
            <img className="" src={PicCalendar} alt="" />
          </div>
        </GridCol>
      </GridRow>
      <div className="table-responsive">
        <table className="teacherhistory-block-table">
          <tbody>
            <tr className="teacherhistory-block-table-head">
              <td className="teacherhistory-block-table-lname">
                Фамилия
                <Link pseudo><img className="" src={PicSort} alt=""/></Link>
                Имя
              </td>
              <td className="teacherhistory-block-table-editdate" />
              <td>Всего занятий</td>
              <td>Всего курсов</td>
              <td>Средний балл</td>
              <td className="teacherhistory-block-table-success">Успехи</td>
              <td className="teacherhistory-block-table-rating">Рейтинг</td>
            </tr>
            <tr>
              <td className="teacherhistory-block-table-picname">
                <img className="teacherhistory-block-table-pic" src={ImgChat2} alt="" />
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}>Мухамедгалиева Ильмира</Link>
              </td>
              <td>
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}><img src={Pencil1} className="teacherhistory-block-table-pencil" alt="" /></Link>
                <Link pseudo><img src={PicCalendar} className="teacherhistory-block-table--calendar" alt="" /></Link>
              </td>
              <td />
              <td />
              <td />
              <td>
                <Link pseudo><img src={PicBanner} className="teacherhistory-block-table-banner" alt="" /></Link>
                <Link pseudo><img src={PicCake} className="teacherhistory-block-table-cake" alt="" /></Link>
              </td>
              <td>
                <Link pseudo><img src={PicHat} className="teacherhistory-block-table-hat" alt="" /></Link>
                <Link pseudo><img src={PicHat} className="teacherhistory-block-table-hat" alt="" /></Link>
              </td>
            </tr>
            <tr>
              <td className="teacherhistory-block-table-picname">
                <img className="teacherhistory-block-table-pic" src={ImgChat2} alt="" />
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}>Болотов Михаил</Link>
              </td>
              <td>
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}><img src={Pencil1} className="teacherhistory-block-table-pencil" alt="" /></Link>
                <Link pseudo><img src={PicCalendar} className="teacherhistory-block-table--calendar" alt="" /></Link>
              </td>
              <td />
              <td />
              <td />
              <td>
                <Link pseudo><img src={PicBanner} className="teacherhistory-block-table-banner" alt="" /></Link>
                <Link pseudo><img src={PicCake} className="teacherhistory-block-table-cake" alt="" /></Link>
              </td>
              <td />
            </tr>
            <tr>
              <td className="teacherhistory-block-table-picname">
                <img className="teacherhistory-block-table-pic" src={ImgChat2} alt="" />
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}>Минаков Кирилл</Link>
              </td>
              <td>
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}><img src={Pencil1} className="teacherhistory-block-table-pencil" alt="" /></Link>
                <Link pseudo><img src={PicCalendar} className="teacherhistory-block-table--calendar" alt="" /></Link>
              </td>
              <td />
              <td />
              <td />
              <td>
                <Link pseudo><img src={PicBanner} className="teacherhistory-block-table-banner" alt="" /></Link>
                <Link pseudo><img src={PicCake} className="teacherhistory-block-table-cake" alt="" /></Link>
              </td>
              <td />
            </tr>
            <tr>
              <td className="teacherhistory-block-table-picname">
                <img className="teacherhistory-block-table-pic" src={ImgChat2} alt="" />
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}>Абрамзон Роман</Link>
              </td>
              <td>
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}><img src={Pencil1} className="teacherhistory-block-table-pencil" alt="" /></Link>
                <Link pseudo><img src={PicCalendar} className="teacherhistory-block-table--calendar" alt="" /></Link>
              </td>
              <td />
              <td />
              <td />
              <td>
                <Link pseudo><img src={PicBanner} className="teacherhistory-block-table-banner" alt="" /></Link>
                <Link pseudo><img src={PicCake} className="teacherhistory-block-table-cake" alt="" /></Link>
              </td>
              <td>
                <Link pseudo><img src={PicHat} className="teacherhistory-block-table-hat" alt="" /></Link>
              </td>
            </tr>
            <tr>
              <td className="teacherhistory-block-table-picname">
                <img className="teacherhistory-block-table-pic" src={ImgChat2} alt="" />
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}>Мамиашвили Зураб</Link>
              </td>
              <td>
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}><img src={Pencil1} className="teacherhistory-block-table-pencil" alt="" /></Link>
                <Link pseudo><img src={PicCalendar} className="teacherhistory-block-table--calendar" alt="" /></Link>
              </td>
              <td>12</td>
              <td><Link pseudo><img src={PicClose} className="teacherhistory-block-table--calendar" alt="" /></Link></td>
              <td>4,67Б</td>
              <td>
                <Link pseudo><img src={PicBanner} className="teacherhistory-block-table-banner" alt="" /></Link>
                <Link pseudo><img src={PicCake} className="teacherhistory-block-table-cake" alt="" /></Link>
              </td>
              <td />
            </tr>
            <tr>
              <td className="teacherhistory-block-table-picname">
                <img className="teacherhistory-block-table-pic" src={ImgChat2} alt="" />
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}>Атанаев Вася</Link>
              </td>
              <td>
                <Link pseudo onClick={() => setIdHistoryOfStudent(1)}><img src={Pencil1} className="teacherhistory-block-table-pencil" alt="" /></Link>
                <Link pseudo><img src={PicCalendar} className="teacherhistory-block-table--calendar" alt="" /></Link>
              </td>
              <td />
              <td />
              <td />
              <td>
                <Link pseudo><img src={PicBanner} className="teacherhistory-block-table-banner" alt="" /></Link>
                <Link pseudo><img src={PicCake} className="teacherhistory-block-table-cake" alt="" /></Link>
              </td>
              <td />
            </tr>
            <tr className="teacherhistory-block-table-transparent">
              <td className="teacherhistory-block-table-picname" />
              <td>
                <Link pseudo><img src={Pencil1} className="teacherhistory-block-table-pencil" alt="" /></Link>
                <Link pseudo><img src={PicCalendar} className="teacherhistory-block-table--calendar" alt="" /></Link>
              </td>
              <td />
              <td />
              <td />
              <td>
                <Link pseudo><img src={PicBanner} className="teacherhistory-block-table-banner" alt="" /></Link>
                <Link pseudo><img src={PicCake} className="teacherhistory-block-table-cake" alt="" /></Link>
              </td>
              <td>
                <Link pseudo><img src={PicHat} className="teacherhistory-block-table-hat" alt="" /></Link>
                <Link pseudo><img src={PicHat} className="teacherhistory-block-table-hat" alt="" /></Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {!!idHistoryOfStudent && <TeacherHistoryOfStudent />}
    </div>
  );
}
