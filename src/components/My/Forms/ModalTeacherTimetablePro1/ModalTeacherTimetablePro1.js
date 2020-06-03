import React from 'react';
import './styles.scss';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Pencil1 from '../../../../theme/images/account/pencil1.svg';
import ImgSetting2 from '../../../../theme/images/account/img-settings2.svg';

/**
 * Teacher tasks form
 */
export default function TeacherTimetablePro1Form({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="teacherpro1-modal">

        <div className="teacherpro1-modal-date">
          Суббота 9 июня 2019 г.
        </div>
        <GridRow>
          <GridCol width={{ mobile: 10, tablet: 10, desktop: 10 }} className="form-field">
            <div className="teacherpro1-modal-about">
              Математические  группы
            </div>
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 2, desktop: 2 }} className="form-field teacherpro1-modal-lesson-edit">
            <Link pseudo><img src={Pencil1} alt=""/></Link>
            <Link pseudo><img src={ImgSetting2} alt="" className="teacherpro1-modal-picplus" /></Link>
          </GridCol>
        </GridRow>

        <div className="table-responsive">
          <table className="teacherpro1-modal-table">
            <tbody>
            <tr className="teacherpro1-modal-table-head">
              <td className="teacherpro1-modal-table-dayweek">
                ДНИ
              </td>
              <td>
                ЧАСЫ
              </td>
              <td>
                Б002-881
              </td>
              <td>
                Б002-882
              </td>
              <td>
                Б002-883
              </td>
              <td>
                Б002-884
              </td>
              <td>
                Б002-885
              </td>
              <td>
                Б002-886
              </td>
            </tr>
            <tr>
              <td className="teacherpro1-modal-table-day" rowSpan="7">
                <div  className="teacherpro1-modal-table-day">
                ПОНЕДЕЛЬНИК
                </div>
              </td>
              <td>
                9:00-10:25
              </td>
              <td colSpan="6" rowSpan="2" className="td-yellow">
                Информатика/ Справку о комп. классах в 608 КПМ
              </td>
            </tr>
            <tr>

              <td>
                10:45-12:10
              </td>
            </tr>
            <tr>

              <td>
                12:20-13:45
              </td>
              <td colSpan="6" className="td-violet">
                Теория вероятностей/ Доцент Резниченко
              </td>
            </tr>
            <tr>

              <td>
                13:55-15:20
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
            </tr>
            <tr>

              <td>
                15:30-16:55
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">
                ТЕОР. ВЕРОЯТ.
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
            </tr>
            <tr>

              <td>
                17:05-18:30
              </td>
              <td colSpan="6" >
                Мастер-класс "Горизонты физики"/ Белоусов Ю.М., ОП Фундаменталь-
                ные проблемы физики квантовых технологий/
              </td>
            </tr>
            <tr>

              <td>
                18:35-20:00
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
            </tr>

            <tr>
              <td className="teacherpro1-modal-table-day" rowSpan="7">
                <div  className="teacherpro1-modal-table-day">
                  ВТОРНИК
                </div>
              </td>
              <td>
                9:00-10:25
              </td>
              <td colSpan="6" rowSpan="2" className="td-yellow">
                Информатика/ Справку о комп. классах в 608 КПМ
              </td>
            </tr>
            <tr>

              <td>
                10:45-12:10
              </td>
            </tr>
            <tr>

              <td>
                12:20-13:45
              </td>
              <td colSpan="6" className="td-violet">
                Теория вероятностей/ Доцент Резниченко
              </td>
            </tr>
            <tr>

              <td>
                13:55-15:20
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
              <td className="td-yellow">
                ИН.ЯЗ
              </td>
            </tr>
            <tr>

              <td>
                15:30-16:55
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">
                ТЕОР. ВЕРОЯТ.
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
            </tr>
            <tr>

              <td>
                17:05-18:30
              </td>
              <td colSpan="6" >
                Мастер-класс "Горизонты физики"/ Белоусов Ю.М., ОП Фундаменталь-
                ные проблемы физики квантовых технологий/
              </td>
            </tr>
            <tr>

              <td>
                18:35-20:00
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
            </tr>
            </tbody>
          </table>





          <table className="teacherpro1-modal-table">
            <tbody>
            <tr className="teacherpro1-modal-table-head">
              <td className="teacherpro1-modal-table-dayweek">
                ДНИ
              </td>
              <td>
                ЧАСЫ
              </td>
              <td className="td-grey">
                Б002-881
              </td>
              <td className="td-grey">
                Б002-882
              </td>
              <td className="td-grey">
                Б002-883
              </td>
              <td className="td-grey">
                Б002-884
              </td>
              <td className="td-grey">
                Б002-885
              </td>
              <td className="td-grey">
                Б002-886
              </td>
            </tr>
            <tr>
              <td className="teacherpro1-modal-table-day" rowSpan="7">
                <div  className="teacherpro1-modal-table-day">
                  ПОНЕДЕЛЬНИК
                </div>
              </td>
              <td className="td-grey">
                9:00-10:25
              </td>
              <td colSpan="6" rowSpan="2" className="td-grey">
                Информатика/ Справку о комп. классах в 608 КПМ
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                10:45-12:10
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                12:20-13:45
              </td>
              <td colSpan="6" className="td-grey">
                Теория вероятностей/ Доцент Резниченко
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                13:55-15:20
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                15:30-16:55
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">
                ТЕОР. ВЕРОЯТ.
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
            </tr>
            <tr>

              <td className="td-grey">
                17:05-18:30
              </td>
              <td colSpan="6"  className="td-grey">
                Мастер-класс "Горизонты физики"/ Белоусов Ю.М., ОП Фундаменталь-
                ные проблемы физики квантовых технологий/
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                18:35-20:00
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
            </tr>

            <tr>
              <td className="teacherpro1-modal-table-day" rowSpan="7">
                <div  className="teacherpro1-modal-table-day">
                  ВТОРНИК
                </div>
              </td>
              <td className="td-grey">
                9:00-10:25
              </td>
              <td colSpan="6" rowSpan="2" className="td-grey">
                Информатика/ Справку о комп. классах в 608 КПМ
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                10:45-12:10
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                12:20-13:45
              </td>
              <td colSpan="6" className="td-grey">
                Теория вероятностей/ Доцент Резниченко
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                13:55-15:20
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
              <td className="td-grey">
                ИН.ЯЗ
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                15:30-16:55
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">
                ТЕОР. ВЕРОЯТ.
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
            </tr>
            <tr>

              <td className="td-grey">
                17:05-18:30
              </td>
              <td colSpan="6" className="td-grey">
                Мастер-класс "Горизонты физики"/ Белоусов Ю.М., ОП Фундаменталь-
                ные проблемы физики квантовых технологий/
              </td>
            </tr>
            <tr>

              <td className="td-grey">
                18:35-20:00
              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
              <td className="td-green">

              </td>
            </tr>
            </tbody>
          </table>
        </div>


      </div>
    </form>
  );
}
