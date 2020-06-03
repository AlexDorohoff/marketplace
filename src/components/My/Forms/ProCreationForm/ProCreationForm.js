import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Input from 'arui-feather/input';
import './styles.scss';
import Link from 'arui-feather/link';
import CheckBox from 'arui-feather/checkbox';

import ImgChat from '../../../../theme/images/account/img-chat6.svg';
import Pencil2 from '../../../../theme/images/account/pencil2.svg';
import PicClose from '../../../../theme/images/account/pic-close3.svg';
import PicPlus from "../../../../theme/images/account/pic-plus3.svg";

/**
 * Pro Creation Form
 */
export default function ProCreationForm({ values, errors, touched, setFieldValue, handleSubmit, handleBlur, isSubmitting }) {
  return (
    <form onSubmit={handleSubmit} className="procreate-form">
      <div className="procreate-form-container">
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 10, desktop: 10 }} className="form-field">
            <div className="titleblock">Преподаватели и предметы</div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 2, desktop: 2 }} className="form-field right-poz">
              <Link pseudo><img src={PicPlus} alt="" /></Link>
          </GridCol>
        </GridRow>
        <table className="procreate-form-table">
          <tbody>
          <tr className="">
            <td>
              Предмет
            </td>
            <td>
              Преподаватель
            </td>
            <td>
              Режим
            </td>
          </tr>
          <tr className="tablestring">
            <td>
              Русский Язык , 5 кл.
            </td>
            <td>
              <div className="teacherdata">
                <img src={ImgChat} alt="" />
              </div>
              <div className="teacherdata">
                Иванова Нина Ивановна
              </div>
            </td>
            <td className="center-poz">
              <Link pseudo><img src={Pencil2} alt="" /></Link>
              <Link pseudo><img src={PicClose} alt="" /></Link>
            </td>
          </tr>
          </tbody>
        </table>
        <div className="titleblock">
          Время занятий
          <Link pseudo><img src={PicPlus} alt="" /></Link>
        </div>

        <GridRow>
          <GridCol width={{ mobile: 10, tablet: 3, desktop: 3 }} className="form-field">
            <Input
              id="time"
              placeholder="9:00 - 10:25"
              value={values.time}
              onChange={value => setFieldValue('time', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.time && touched.time && (<span>{errors.time}</span>)}
              disabled={isSubmitting}
              className="timeinput"
            />
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} className="form-field">
            <Link pseudo><img src={Pencil2} alt="" /></Link>
            <Link pseudo><img src={PicClose} alt="" /></Link>
          </GridCol>
          <GridCol width={{ mobile: 10, tablet: 3, desktop: 3 }} className="form-field">
            <Input
              id="time"
              placeholder="10:45 - 12:10"
              value={values.time}
              onChange={value => setFieldValue('time', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.time && touched.time && (<span>{errors.time}</span>)}
              disabled={isSubmitting}
              className="timeinput"
            />
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} className="form-field">
            <Link pseudo><img src={Pencil2} alt="" /></Link>
            <Link pseudo><img src={PicClose} alt="" /></Link>
          </GridCol>
          <GridCol width={{ mobile: 10, tablet: 3, desktop: 3 }} className="form-field">
            <Input
              id="time"
              placeholder="Ввод времени"
              value={values.time}
              onChange={value => setFieldValue('time', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.time && touched.time && (<span>{errors.time}</span>)}
              disabled={isSubmitting}
              className="timeinput"
            />
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} className="form-field">
          </GridCol>
        </GridRow>

        <div className="titleblockdays">
          Учебные дни
        </div>
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <CheckBox
              id="1"
              text="Понедельник"
              checked={values.agree}
              onChange={isChecked => setFieldValue('1', isChecked)}
            />
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <CheckBox
              id="3"
              text="Среда"
              checked={values.agree}
              onChange={isChecked => setFieldValue('3', isChecked)}
            />
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <CheckBox
              id="5"
              text="Пятница"
              checked={values.agree}
              onChange={isChecked => setFieldValue('5', isChecked)}
            />
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <CheckBox
              id="2"
              text="Вторник"
              checked={values.agree}
              onChange={isChecked => setFieldValue('2', isChecked)}
            />
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <CheckBox
              id="4"
              text="Четверг"
              checked={values.agree}
              onChange={isChecked => setFieldValue('4', isChecked)}
            />
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 4, desktop: 4 }} className="form-field">
            <CheckBox
              id="6"
              text="Суббота"
              checked={values.agree}
              onChange={isChecked => setFieldValue('6', isChecked)}
            />
          </GridCol>
        </GridRow>

        <div className="titleblockdays">
          Группы и классы
          <Link pseudo><img src={PicPlus} alt="" /></Link>
        </div>

        <GridRow>
          <GridCol width={{ mobile: 10, tablet: 5, desktop: 5 }} className="form-field">
            <Input
              id="group"
              placeholder="5М (математический)"
              value={values.group}
              onChange={value => setFieldValue('group', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.group && touched.group && (<span>{errors.group}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} className="form-field">
            <Link pseudo><img src={Pencil2} alt="" /></Link>
            <Link pseudo><img src={PicClose} alt="" /></Link>
          </GridCol>
          <GridCol width={{ mobile: 10, tablet: 5, desktop: 5 }} className="form-field">
            <Input
              id="group"
              placeholder="5Э (экономико-правовой)"
              value={values.group}
              onChange={value => setFieldValue('group', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.group && touched.group && (<span>{errors.group}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} className="form-field">
            <Link pseudo><img src={Pencil2} alt="" /></Link>
            <Link pseudo><img src={PicClose} alt="" /></Link>
          </GridCol>
          <GridCol width={{ mobile: 10, tablet: 5, desktop: 5 }} className="form-field">
            <Input
              id="group"
              placeholder="Ввод группы или класса"
              value={values.group}
              onChange={value => setFieldValue('group', value)}
              onBlur={handleBlur}
              width="available"
              error={errors.group && touched.group && (<span>{errors.group}</span>)}
              disabled={isSubmitting}
            />
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} className="form-field">
            <Link pseudo><img src={Pencil2} alt="" /></Link>
            <Link pseudo><img src={PicClose} alt="" /></Link>
          </GridCol>
          <GridCol width={{ mobile: 10, tablet: 5, desktop: 5 }} className="form-field">
          </GridCol>
          <GridCol width={{ mobile: 2, tablet: 1, desktop: 1 }} className="form-field">
          </GridCol>
        </GridRow>


        <div className="teacher-form-action">
          <Button type="submit" className="button button_default button_modal" disabled={isSubmitting}>Сохранить</Button>
        </div>
      </div>
    </form>
  );
}
